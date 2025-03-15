"use client"

import type React from "react"

import { createContext, useContext, useReducer, type ReactNode, useEffect } from "react"
import type { Task } from "@/types/task"
import { useAuth } from "./auth-context"

type TaskAction =
  | { type: "added"; text: string }
  | { type: "edited"; id: string; text: string }
  | { type: "toggled"; id: string }
  | { type: "deleted"; id: string }
  | { type: "filter"; filter: string }
  | { type: "set"; tasks: Task[] }

interface TasksContextType {
  tasks: Task[]
  filter: string
  dispatch: React.Dispatch<TaskAction>
}

const TasksContext = createContext<TasksContextType | undefined>(undefined)

const initialTasks: Task[] = [
  { id: "1", text: "Learn React", completed: true },
  { id: "2", text: "Build a task app", completed: false },
  { id: "3", text: "Deploy to production", completed: false },
]

function tasksReducer(state: { tasks: Task[]; filter: string }, action: TaskAction) {
  switch (action.type) {
    case "added": {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: crypto.randomUUID(),
            text: action.text,
            completed: false,
          },
        ],
      }
    }
    case "edited": {
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.id ? { ...task, text: action.text } : task)),
      }
    }
    case "toggled": {
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.id ? { ...task, completed: !task.completed } : task)),
      }
    }
    case "deleted": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      }
    }
    case "filter": {
      return {
        ...state,
        filter: action.filter,
      }
    }
    case "set": {
      return {
        ...state,
        tasks: action.tasks,
      }
    }
    default: {
      return state
    }
  }
}

export function TasksProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [state, dispatch] = useReducer(tasksReducer, {
    tasks: [],
    filter: "all",
  })

  // Load tasks from localStorage when user changes
  useEffect(() => {
    if (user) {
      const savedTasks = localStorage.getItem(`tasks-${user.id}`)
      if (savedTasks) {
        dispatch({ type: "set", tasks: JSON.parse(savedTasks) })
      } else {
        dispatch({ type: "set", tasks: initialTasks })
      }
    } else {
      dispatch({ type: "set", tasks: initialTasks })
    }
  }, [user])

  // Save tasks to localStorage when they change
  useEffect(() => {
    if (user) {
      localStorage.setItem(`tasks-${user.id}`, JSON.stringify(state.tasks))
    }
  }, [state.tasks, user])

  return (
    <TasksContext.Provider value={{ tasks: state.tasks, filter: state.filter, dispatch }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasksContext() {
  const context = useContext(TasksContext)
  if (context === undefined) {
    throw new Error("useTasksContext must be used within a TasksProvider")
  }
  return context
}

