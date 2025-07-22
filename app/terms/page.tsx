import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                By accessing and using Rent a Friend India ("the Platform"), you accept and agree to be bound by the
                terms and provision of this agreement. These Terms of Service govern your use of our platform and
                services provided by Rent a Friend India Private Limited, a company incorporated under the laws of
                India.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this service. These terms are subject to
                Indian law and jurisdiction of Indian courts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Service Description</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Rent a Friend India is a platform that connects individuals seeking companionship with verified friends
                across India. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Facilitating connections between users and verified friends</li>
                <li>Providing a secure booking and payment system</li>
                <li>Government ID verification for all friends</li>
                <li>24/7 safety monitoring and support</li>
                <li>Dispute resolution services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Eligibility and Registration</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>Age Requirement:</strong> Users must be at least 18 years old to use our platform.
              </p>
              <p>
                <strong>Identity Verification:</strong> All friends must complete government ID verification using:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Aadhaar Card (mandatory)</li>
                <li>PAN Card (mandatory)</li>
                <li>Additional documents as required (Passport, Driving License, etc.)</li>
                <li>Live photo verification</li>
                <li>Background verification check</li>
              </ul>
              <p>
                <strong>Accuracy of Information:</strong> Users must provide accurate, current, and complete information
                during registration and keep their profile updated.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Safety and Conduct Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>Prohibited Activities:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any form of sexual services or romantic relationships for payment</li>
                <li>Harassment, abuse, or inappropriate behavior</li>
                <li>Sharing personal contact information outside the platform initially</li>
                <li>Engaging in illegal activities</li>
                <li>Discrimination based on religion, caste, gender, or other protected characteristics</li>
              </ul>
              <p>
                <strong>Safety Measures:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Always meet in public places for initial meetings</li>
                <li>Inform someone about your booking details</li>
                <li>Use our in-app communication initially</li>
                <li>Report any suspicious behavior immediately</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>Pricing:</strong> All prices are displayed in Indian Rupees (₹). Friends set their own hourly
                rates.
              </p>
              <p>
                <strong>Platform Fee:</strong> We charge a 10% platform fee on all bookings for safety, verification,
                and platform maintenance.
              </p>
              <p>
                <strong>Payment Methods:</strong> We accept UPI, credit/debit cards, net banking, and digital wallets.
              </p>
              <p>
                <strong>Refund Policy:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full refund for cancellations 24+ hours before booking</li>
                <li>50% refund for cancellations 12-24 hours before booking</li>
                <li>No refund for cancellations less than 12 hours before booking</li>
                <li>Full refund in case of friend no-show or platform issues</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We are committed to protecting your privacy and comply with applicable Indian data protection laws. Your
                personal information is collected, stored, and processed in accordance with our Privacy Policy.
              </p>
              <p>
                <strong>Government ID Storage:</strong> ID documents are encrypted and stored securely for verification
                purposes and may be shared with law enforcement if required by law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Liability and Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                While we implement extensive safety measures, users engage with friends at their own risk. Rent a Friend
                India acts as a platform facilitator and is not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Actions or behavior of users or friends</li>
                <li>Disputes between users and friends</li>
                <li>Loss or damage during bookings</li>
                <li>Technical issues or platform downtime</li>
              </ul>
              <p>Our maximum liability is limited to the amount paid for the specific booking in question.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                These Terms of Service are governed by the laws of India. Any disputes arising from the use of this
                platform will be subject to the exclusive jurisdiction of the courts in Gurgaon, Haryana, India.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>For questions about these Terms of Service, contact us at:</p>
              <p>
                <strong>Email:</strong> legal@rentafriend.in
                <br />
                <strong>Phone:</strong> +91 98765 43210
                <br />
                <strong>Address:</strong> 123 Tech Park, Sector 5, Gurgaon, Haryana 122001
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 mb-4">
            By using our platform, you acknowledge that you have read, understood, and agree to these Terms of Service.
          </p>
          <Link href="/auth">
            <Button size="lg">I Agree - Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
