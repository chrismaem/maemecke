export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center space-y-1">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          &copy; {new Date().getFullYear()} Christoph Mämecke
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Built with Visual Studio Code &amp; Claude. Using React &amp; Tailwind CSS. Hosted on Cloudflare Pages.
        </p>
      </div>
    </footer>
  )
}





