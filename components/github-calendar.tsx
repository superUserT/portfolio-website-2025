"use client"
import GitHubCalendar from "react-github-calendar"
import { useTheme } from "next-themes"

export function GithubActivity() {
  const { theme } = useTheme()

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Days I <span className="text-purple-600 dark:text-purple-400">Code</span>
      </h2>
      <div className="w-full overflow-x-auto flex justify-center px-4">
        <GitHubCalendar
          username="superUserT"
          blockSize={15}
          blockMargin={5}
          colorScheme={theme === "dark" ? "dark" : "light"}
          fontSize={16}
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  )
}

