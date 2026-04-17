"use client"

import { ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { saveMessage } from "@/lib/message-store"

interface DirectMessagePopoverProps {
    children: ReactNode
}

const MAX_MESSAGE_LENGTH = 1000
const SUBMIT_DELAY_MS = 500
const SUCCESS_DISPLAY_MS = 1500

const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const validatePhone = (phone: string): boolean => {
    return /^[\d\s\-+()]{7,}$/.test(phone)
}

export default function DirectMessagePopover({ children }: DirectMessagePopoverProps) {
    const [contactType, setContactType] = useState<"email" | "phone">("email")
    const [contact, setContact] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [open, setOpen] = useState(false)
    const [validationError, setValidationError] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!contact.trim() || !message.trim()) return

        // Validate contact format
        const isValid = contactType === "email"
            ? validateEmail(contact.trim())
            : validatePhone(contact.trim())

        if (!isValid) {
            setValidationError(
                contactType === "email"
                    ? "Please enter a valid email address"
                    : "Please enter a valid phone number"
            )
            return
        }

        setValidationError(null)
        setIsSubmitting(true)

        // Save to localStorage
        const success = saveMessage({
            contact: contact.trim(),
            contactType,
            message: message.trim(),
        })

        if (!success) {
            setIsSubmitting(false)
            setValidationError("Failed to save message. Please try again.")
            return
        }

        // Show success state
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
        }, SUBMIT_DELAY_MS)
    }

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
        if (!newOpen) {
            // Reset form when closing
            setContact("")
            setMessage("")
            setSubmitted(false)
            setIsSubmitting(false)
            setValidationError(null)
        }
    }

    const handleSuccessComplete = () => {
        setContact("")
        setMessage("")
        setSubmitted(false)
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="bg-black/90 border-white/20 text-white max-w-sm overflow-hidden">
                <DialogHeader>
                    <DialogTitle className="text-white text-lg font-light text-center">
                        Leave a Message
                    </DialogTitle>
                </DialogHeader>
                <p className="text-white/60 text-sm text-center mt-4">
                    Please leave your contact information and a message. We'll respond via email or phone.
                </p>

                <div className="relative overflow-hidden min-h-[300px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                onAnimationComplete={handleSuccessComplete}
                                className="py-8 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6"
                                >
                                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-white/80 font-light text-lg"
                                >
                                    Thank you! We'll respond via {contactType === "email" ? "email" : "phone"} shortly.
                                </motion.p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleSubmit}
                                className="space-y-4 py-4"
                            >
                                {/* Validation Error */}
                                {validationError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm"
                                    >
                                        {validationError}
                                    </motion.div>
                                )}

                                {/* Contact Type Toggle */}
                                <div className="space-y-3">
                                    <p className="text-white/70 text-sm font-medium">How should we respond?</p>
                                    <div className="flex rounded-full bg-white/5 p-1 border border-white/10">
                                        {(["email", "phone"] as const).map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => setContactType(type)}
                                                className="relative flex-1 py-2 text-xs font-light rounded-full transition-colors duration-200 z-0"
                                                style={{ color: contactType === type ? "black" : "rgba(255, 255, 255, 0.7)" }}
                                            >
                                                {contactType === type && (
                                                    <motion.div
                                                        layoutId="activeContactType"
                                                        className="absolute inset-0 bg-white rounded-full z-[-1]"
                                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                    />
                                                )}
                                                {type === "email" ? "Email" : "Phone"}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Input */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <motion.input
                                        type={contactType === "email" ? "email" : "tel"}
                                        aria-label={contactType === "email" ? "Email address" : "Phone number"}
                                        placeholder={contactType === "email" ? "Enter your email address" : "Enter your phone number"}
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        required
                                        whileFocus={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm font-light focus:outline-none focus:border-white/30 transition-colors duration-200"
                                    />
                                </motion.div>

                                {/* Message Textarea */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <motion.textarea
                                        placeholder="What would you like to say?"
                                        aria-label="Message content"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        rows={4}
                                        maxLength={MAX_MESSAGE_LENGTH}
                                        whileFocus={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm font-light focus:outline-none focus:border-white/30 transition-colors duration-200 resize-none"
                                    />
                                    <p className="text-white/40 text-xs text-right">
                                        {message.length}/{MAX_MESSAGE_LENGTH}
                                    </p>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting || !contact.trim() || !message.trim()}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                    className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                                                />
                                                <span>Sending...</span>
                                            </div>
                                        ) : (
                                            "Submit Message"
                                        )}
                                    </motion.button>
                                </motion.div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    )
}
