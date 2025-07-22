import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>Personal Information:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Profile photos and description</li>
                <li>Government ID documents (Aadhaar, PAN, Passport)</li>
                <li>Location and address information</li>
                <li>Payment information (processed securely through payment gateways)</li>
              </ul>

              <p>
                <strong>Usage Information:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Booking history and preferences</li>
                <li>Messages and communications on the platform</li>
                <li>Device information and IP address</li>
                <li>App usage patterns and analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verify your identity and ensure platform safety</li>
                <li>Facilitate bookings and connections</li>
                <li>Process payments and handle refunds</li>
                <li>Provide customer support and resolve disputes</li>
                <li>Send important notifications about bookings and safety</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal requirements and law enforcement requests</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Government ID Verification</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                <strong>Why We Collect Government IDs:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To verify the identity of all friends on our platform</li>
                <li>To ensure user safety and prevent fraud</li>
                <li>To comply with Indian regulations and KYC requirements</li>
                <li>To enable background verification checks</li>
              </ul>

              <p>
                <strong>How We Protect ID Information:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All ID documents are encrypted using AES-256 encryption</li>
                <li>Stored on secure servers with restricted access</li>
                <li>Only authorized verification team members can access</li>
                <li>Automatically deleted after account closure (as per legal requirements)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Other Users:</strong> Profile information visible to potential matches
                </li>
                <li>
                  <strong>Payment Processors:</strong> For secure payment processing
                </li>
                <li>
                  <strong>Verification Partners:</strong> For background checks and ID verification
                </li>
                <li>
                  <strong>Law Enforcement:</strong> When required by law or for safety reasons
                </li>
                <li>
                  <strong>Service Providers:</strong> Third-party services that help us operate the platform
                </li>
              </ul>

              <p>
                <strong>We Never Share:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your government ID documents with other users</li>
                <li>Your personal contact information without consent</li>
                <li>Your private messages or conversations</li>
                <li>Your payment information with unauthorized parties</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We implement industry-standard security measures:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication for admin access</li>
                <li>Regular backups and disaster recovery procedures</li>
                <li>Employee training on data protection and privacy</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Under Indian data protection laws, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of your personal data
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your account and data
                </li>
                <li>
                  <strong>Portability:</strong> Export your data in a readable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain types of data processing
                </li>
              </ul>

              <p>To exercise these rights, contact us at privacy@rentafriend.in</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We retain your data for the following periods:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Active Accounts:</strong> As long as your account is active
                </li>
                <li>
                  <strong>Government IDs:</strong> 7 years after account closure (legal requirement)
                </li>
                <li>
                  <strong>Transaction Records:</strong> 7 years for tax and legal compliance
                </li>
                <li>
                  <strong>Safety Reports:</strong> 10 years for safety and legal purposes
                </li>
                <li>
                  <strong>Marketing Data:</strong> Until you opt-out or request deletion
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep you logged in and remember your preferences</li>
                <li>Analyze how you use our platform</li>
                <li>Provide personalized recommendations</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
              <p>You can control cookies through your browser settings.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>For privacy-related questions or concerns:</p>
              <p>
                <strong>Data Protection Officer:</strong> privacy@rentafriend.in
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
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          <Link href="/contact">
            <Button size="lg">Contact Privacy Team</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
