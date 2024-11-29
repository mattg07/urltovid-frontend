import { FormEvent, useState } from "react";
import axios from "axios";
import { CheckCircle, PenTool, Sparkles, Video, Zap } from "lucide-react";
function Home() {
  const [url, setUrl] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    setLoadingMessage("Generating assets...");

    try {
      const assetsResponse = await axios.get(
        "https://urltovid-backend.onrender.com/create-story?url=" +
          encodeURIComponent(url)
      );

      const id = assetsResponse.data;
      setLoadingMessage("Preparing your video...");

      const videoResponse = await axios.get(
        "https://urltovid-backend.onrender.com/build-video?id=" + id
      );

      setLoadingMessage("");
      window.location.href =
        "https://urltovid-backend.onrender.com/" + videoResponse.data.videoPath;
    } catch (error) {
      console.error("Error during request:", error);
      setLoadingMessage("An error occurred. Please try again.");
    }
  }

  return (
    <>
      {loadingMessage && (
        <div className="fixed inset-0 bg-black/95 flex justify-center items-center">
          <p className="text-xl text-center">{loadingMessage}</p>
        </div>
      )}
      <div className="flex flex-col min-h-screen">
        <main className="max-w-3xl mx-auto flex px-4">
          <div className="py-8 flex flex-col">
            <h1 className="text-4xl font-bold uppercase mb-6">
              URL to Video
              <br />
              <span className="bg-gradient-to-br from-emerald-500 from-30% to-sky-500 bg-clip-text text-transparent">
                {" "}
                with power of AI
              </span>
            </h1>
            <p className="pb-6">
              Convert any URL into a captivating video with the power of AI. Our
              tool automatically analyzes and transforms your web content into
              dynamic videos, making it easier to share and engage your
              audience.
            </p>
            <form
              onSubmit={handleSubmit}
              className="white border-2 rounded-full flex overflow-hidden"
            >
              <input
                value={url}
                onChange={(ev) => setUrl(ev.target.value)}
                className="bg-transparent text- px-4 py-2 grow "
                type="url"
                placeholder="https..."
              />
              <button className="bg-emerald-400 text-black  px-2" type="submit">
                Create video
              </button>
            </form>
          </div>
          <div className="p-8 hidden md:block">
            <div className="bg-gray-200 w-[240px] h-[380px] opacity-35 text-center text-black rounded-md">
              Video Preview..
            </div>
          </div>
        </main>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  1. Upload Your Blog Post
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Simply paste your blog post URL or content into our platform.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. AI Magic Happens</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our AI analyzes your content and creates a video script with
                  visuals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Download & Share</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Preview, edit if needed, and share your new video across
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-500 from-30% to-sky-500 bg-clip-text text-transparent">
          <div className="container px-4 md:px-6 m-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-700 text-white px-3 py-4 text-sm dark:bg-gray-800">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock the Power of Video Content
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI-powered tool makes it easy to repurpose your blog
                  content into engaging videos, helping you reach a wider
                  audience and boost your content's impact.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Zap className="h-8 w-8 text-primary" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Lightning Fast</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Generate videos in minutes, not hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">AI-Powered Creativity</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Let our AI enhance your content with smart suggestions.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <PenTool className="h-8 w-8 text-primary" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Customizable</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Tailor your videos to match your brand and style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
export default Home;
