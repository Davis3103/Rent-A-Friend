"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Phone, Video, MoreVertical, ArrowLeft, Search } from "lucide-react"
import Link from "next/link"

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=40&width=40",
      lastMessage: "Looking forward to our city tour tomorrow!",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Mike Chen",
      image: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the great coffee chat!",
      timestamp: "1 hour ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Emily Davis",
      image: "/placeholder.svg?height=40&width=40",
      lastMessage: "The movie was amazing! Thanks for joining.",
      timestamp: "Yesterday",
      unread: 1,
      online: true,
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      image: "/placeholder.svg?height=40&width=40",
      lastMessage: "Great hiking experience! Would book again.",
      timestamp: "2 days ago",
      unread: 0,
      online: false,
    },
  ]

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: "Sarah Johnson",
      content: "Hi John! Thanks for booking the city photography tour with me.",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      senderId: "me",
      senderName: "You",
      content: "Hi Sarah! I'm really excited about tomorrow. What should I bring?",
      timestamp: "10:32 AM",
      isOwn: true,
    },
    {
      id: 3,
      senderId: 1,
      senderName: "Sarah Johnson",
      content:
        "Just bring comfortable walking shoes and your camera if you have one! I'll handle the rest. We'll meet at Washington Square Park at 2 PM.",
      timestamp: "10:35 AM",
      isOwn: false,
    },
    {
      id: 4,
      senderId: "me",
      senderName: "You",
      content: "Perfect! I have a DSLR camera. Should I bring any specific lenses?",
      timestamp: "10:37 AM",
      isOwn: true,
    },
    {
      id: 5,
      senderId: 1,
      senderName: "Sarah Johnson",
      content:
        "A 50mm lens would be great for portraits, and maybe a wide-angle for the cityscapes. But don't worry if you don't have them - we can work with whatever you have!",
      timestamp: "10:40 AM",
      isOwn: false,
    },
    {
      id: 6,
      senderId: 1,
      senderName: "Sarah Johnson",
      content: "Looking forward to our city tour tomorrow!",
      timestamp: "Just now",
      isOwn: false,
    },
  ]

  const selectedConversation = conversations.find((c) => c.id === selectedChat)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message logic here
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/user-dashboard" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Conversations
                <Badge variant="secondary">{conversations.filter((c) => c.unread > 0).length}</Badge>
              </CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[500px]">
                <div className="space-y-1">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`flex items-center space-x-3 p-4 cursor-pointer hover:bg-gray-50 ${
                        selectedChat === conversation.id ? "bg-blue-50 border-r-2 border-blue-500" : ""
                      }`}
                      onClick={() => setSelectedChat(conversation.id)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conversation.image || "/placeholder.svg"} />
                          <AvatarFallback>
                            {conversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900 truncate">{conversation.name}</p>
                          <p className="text-xs text-gray-500">{conversation.timestamp}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                          {conversation.unread > 0 && (
                            <Badge
                              variant="destructive"
                              className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                            >
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={selectedConversation.image || "/placeholder.svg"} />
                          <AvatarFallback>
                            {selectedConversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {selectedConversation.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{selectedConversation.name}</h3>
                        <p className="text-sm text-gray-500">
                          {selectedConversation.online ? "Online" : "Last seen 2 hours ago"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-[400px] p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                              message.isOwn ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${message.isOwn ? "text-blue-100" : "text-gray-500"}`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No conversation selected</h3>
                  <p className="text-gray-500">Choose a conversation from the list to start chatting</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
