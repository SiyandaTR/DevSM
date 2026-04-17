// Message store utility for localStorage
// Stores direct messages with timestamps

export interface DirectMessage {
    contact: string        // email or phone number
    contactType: "email" | "phone"
    message: string
    timestamp: string      // ISO date string
}

const STORAGE_KEY = "devsm_direct_messages"

export function saveMessage(data: Omit<DirectMessage, "timestamp">): boolean {
    try {
        const messages = getStoredMessages()

        const newMessage: DirectMessage = {
            ...data,
            timestamp: new Date().toISOString(),
        }

        messages.push(newMessage)

        if (typeof window !== "undefined") {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
        }
        return true
    } catch (error) {
        console.error("Failed to save message:", error)
        return false
    }
}

function getStoredMessages(): DirectMessage[] {
    if (typeof window === "undefined") return []

    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []

    try {
        return JSON.parse(stored)
    } catch {
        return []
    }
}
