import { Check } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"

export function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-900">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-600">Choose Your Plan</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Select the perfect plan for your content creation needs. Upgrade or downgrade at any time.
            </p>
          </div>
        </div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Perfect for beginners and small blogs</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$19<span className="text-sm font-normal text-muted-foreground">/month</span></div>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> 5 video conversions per month
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Basic video customization
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> 720p video quality
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Email support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Ideal for growing content creators</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$49<span className="text-sm font-normal text-muted-foreground">/month</span></div>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> 20 video conversions per month
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Advanced video customization
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> 1080p video quality
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Priority email support
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Custom branding
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Upgrade to Pro</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large-scale content production</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">Custom</div>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Unlimited video conversions
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Full video customization suite
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> 4K video quality
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> 24/7 priority support
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> API access
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Dedicated account manager
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

