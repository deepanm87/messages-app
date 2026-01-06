export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xl font-bold tracking-tight">Beam</span>
            <p className="text-sm text-muted-foreground mt-1">
              The future of communication
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </a>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Beam. This is a Demo. We have no affiliation with any of the 
            brands mentioned in the video including Beam, any usage is purely educational, in the event
            of any infringement, please contact us and we will remove/alter the content immediately.
          </p>
        </div>
      </div>
    </footer>
  )
}