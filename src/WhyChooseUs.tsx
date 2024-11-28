import { CheckCircle, Sparkles, Video } from 'lucide-react'

function WhyChooseUs() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6 m-auto">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
            <CheckCircle className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">1. Upload Your Blog Post</h3>
          <p className="text-gray-500 dark:text-gray-400">Simply paste your blog post URL or content into our platform.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">2. AI Magic Happens</h3>
          <p className="text-gray-500 dark:text-gray-400">Our AI analyzes your content and creates a video script with visuals.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
            <Video className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">3. Download & Share</h3>
          <p className="text-gray-500 dark:text-gray-400">Preview, edit if needed, and share your new video across platforms.</p>
        </div>
      </div>
    </div>
  </section>  )
}

export default WhyChooseUs