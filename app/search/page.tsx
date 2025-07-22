"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Search, MapPin, Star, Filter, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SearchFriendsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [priceRange, setPriceRange] = useState([800, 3600])
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const friends = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "/placeholder.svg?height=200&width=200",
      age: 28,
      city: "Mumbai",
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 1200,
      interests: ["Bollywood", "Street Food", "Temples"],
      description:
        "Love exploring Mumbai and meeting new people! I know all the best street food spots and Bollywood hangouts.",
      availability: "Available today",
    },
    {
      id: 2,
      name: "Rahul Verma",
      image: "/placeholder.svg?height=200&width=200",
      age: 32,
      city: "Delhi",
      rating: 4.8,
      reviewCount: 89,
      hourlyRate: 1500,
      interests: ["Historical Sites", "Cricket", "Spicy Food"],
      description:
        "History buff and cricket enthusiast. Let's explore the historical sites of Delhi and grab some spicy food!",
      availability: "Available tomorrow",
    },
    {
      id: 3,
      name: "Anjali Reddy",
      image: "/placeholder.svg?height=200&width=200",
      age: 25,
      city: "Bangalore",
      rating: 5.0,
      reviewCount: 156,
      hourlyRate: 1800,
      interests: ["Tech", "Coffee", "Gardens"],
      description:
        "Tech enthusiast and coffee lover. Perfect companion for exploring Bangalore's tech scene and beautiful gardens!",
      availability: "Available this week",
    },
    {
      id: 4,
      name: "Arjun Kumar",
      image: "/placeholder.svg?height=200&width=200",
      age: 30,
      city: "Chennai",
      rating: 4.7,
      reviewCount: 203,
      hourlyRate: 1000,
      interests: ["Classical Music", "Beaches", "South Indian Food"],
      description: "Loves classical music and exploring the beaches. Knows the best South Indian restaurants!",
      availability: "Available weekends",
    },
    {
      id: 5,
      name: "Deepika Chatterjee",
      image: "/placeholder.svg?height=200&width=200",
      age: 27,
      city: "Kolkata",
      rating: 4.6,
      reviewCount: 95,
      hourlyRate: 900,
      interests: ["Art", "Literature", "Sweets"],
      description: "Art lover and bookworm. Knows all the hidden gems of Kolkata's art scene and the best sweet shops!",
      availability: "Available on weekdays",
    },
    {
      id: 6,
      name: " Rohan Patil",
      image: "/placeholder.svg?height=200&width=200",
      age: 31,
      city: "Pune",
      rating: 4.9,
      reviewCount: 142,
      hourlyRate: 1300,
      interests: ["Trekking", "History", "Maharashtrian Food"],
      description:
        "Trekking enthusiast and history buff. Let's explore the forts around Pune and enjoy some delicious Maharashtrian food!",
      availability: "Available on weekends",
    },
  ]

  const interests = [
    "Bollywood",
    "Street Food",
    "Temples",
    "Historical Sites",
    "Cricket",
    "Spicy Food",
    "Tech",
    "Coffee",
    "Gardens",
    "Classical Music",
    "Beaches",
    "South Indian Food",
    "Art",
    "Literature",
    "Sweets",
    "Trekking",
    "History",
    "Maharashtrian Food",
    "Yoga",
    "Shopping",
    "Nightlife",
    "Culture",
  ]

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
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
              <h1 className="text-xl font-semibold text-gray-900">Find Friends</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Filter className="h-5 w-5 mr-2" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <Label htmlFor="search">Search</Label>
                    <div className="relative mt-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="search"
                        placeholder="Search friends..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <Label>City</Label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="chennai">Chennai</SelectItem>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <Label>Price Range (₹/hour)</Label>
                    <div className="mt-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={3600}
                        min={800}
                        step={100}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>₹{priceRange[0]}</span>
                        <span>₹{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <Label>Availability</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Available today</SelectItem>
                        <SelectItem value="tomorrow">Available tomorrow</SelectItem>
                        <SelectItem value="this-week">This week</SelectItem>
                        <SelectItem value="weekends">Weekends only</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Interests */}
                  <div>
                    <Label>Interests</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <Badge
                          key={interest}
                          variant={selectedInterests.includes(interest) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleInterest(interest)}
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Available Friends</h2>
              <p className="text-gray-600">{friends.length} friends found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {friends.map((friend) => (
                <Card key={friend.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={friend.image || "/placeholder.svg"}
                      alt={friend.name}
                      className="w-full h-48 object-cover"
                    />
                    <Button size="sm" variant="secondary" className="absolute top-2 right-2">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{friend.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          {friend.city} • Age {friend.age}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">₹{friend.hourlyRate}/hr</p>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm ml-1">
                            {friend.rating} ({friend.reviewCount})
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">{friend.description}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {friend.interests.slice(0, 3).map((interest) => (
                        <Badge key={interest} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                      {friend.interests.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{friend.interests.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-600 font-medium">{friend.availability}</span>
                      <div className="flex space-x-2">
                        <Link href={`/friend-profile/${friend.id}`}>
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                        </Link>
                        <Link href={`/booking/${friend.id}`}>
                          <Button size="sm">Book Now</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Friends
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
