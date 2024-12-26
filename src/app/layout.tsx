import CallbackButton from '@/components/common/CallbackButton'
import './globals.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="ms-clarity">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID")
          `}
        </Script>
      </head>
      <body>
        {children}
        <CallbackButton />
      </body>
    </html>
  )
}