import formData from 'form-data'
import Mailgun from 'mailgun.js'

const mailgun = new Mailgun(formData)
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY!,
})
export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log('Received form data:', data)
    
    const result = await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: `XFiber <noreply@${process.env.MAILGUN_DOMAIN}>`,
      to: process.env.TO_EMAIL,
      subject: `New Inquiry from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
`
    })
    
    console.log('Email sent successfully:', result)

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error: any) {
    console.error('Email sending failed:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}