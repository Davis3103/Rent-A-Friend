import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">Rent a Friend India</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/">
                <Button variant="ghost">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Rent a Friend India</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting people across India for meaningful friendships, cultural exchanges, and memorable experiences.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In today's fast-paced world, genuine human connections have become increasingly rare. Rent a Friend India
              was born from the vision to bridge this gap by creating a safe, verified platform where people can find
              meaningful companionship.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're new to a city, looking to explore local culture, need a companion for events, or simply
              want to make new friends, our platform connects you with verified, trustworthy individuals who share your
              interests and values.
            </p>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                All friends undergo thorough verification including government ID checks, background verification, and
                continuous monitoring to ensure your safety.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Authentic Connections</h3>
              <p className="text-gray-600">
                We foster genuine relationships based on shared interests, cultural understanding, and mutual respect
                across India's diverse communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2024, Rent a Friend India emerged from recognizing the unique social challenges faced by people
              in India's rapidly growing urban centers. From IT professionals relocating to Bangalore to students moving
              to Delhi, millions of Indians find themselves in new cities without social connections.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our founders, having experienced this challenge firsthand, created a platform that celebrates India's rich
              cultural diversity while ensuring safety and authenticity. We've built strong partnerships with local
              communities and implemented robust verification processes tailored to the Indian context.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we're proud to serve thousands of users across major Indian cities, facilitating everything from
              cultural tours and language exchanges to professional networking and hobby-based friendships.
            </p>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Government ID Verified</h4>
                <p className="text-sm text-gray-600">
                  All friends verified using Aadhaar, PAN, and other government documents
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">24/7 Safety Support</h4>
                <p className="text-sm text-gray-600">Round-the-clock safety monitoring and emergency support</p>
              </div>
              <div className="text-center">
                <Users className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Cultural Sensitivity</h4>
                <p className="text-sm text-gray-600">Understanding of Indian values, traditions, and social norms</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make New Connections?</h2>
          <p className="text-gray-600 mb-6">Join thousands of Indians creating meaningful friendships every day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg">Get Started Today</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
