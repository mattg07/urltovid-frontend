import {  Mail, ExternalLink, Cat } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card"

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      <Card className="w-full max-w-md bg-gray-400 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-2 text-center">
              <p className="text-sm md:text-base flex">
                This was made by Matias using GPTSCRIPT, a framework to communicate with openAI and other LLMS
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a
                href="https://github.com/mattg07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Cat className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">matiasgodoydev@gmail.com</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="w-full" asChild>
            <a
              href="https://docs.gptscript.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Check out GPTSCRIPT here
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </CardFooter>
        <div className='p-3 flex items-center gap-4 justify-center opacity-80'>
            <img src="/openailogo.png" width={100} height={100} alt="" />
            <img src="/nodelogo.png" width={100} height={100} alt="" />
            <img src="/reactlogo.png" width={80} height={80} alt="" />
            </div>
      </Card>
    </div>
  )
}

