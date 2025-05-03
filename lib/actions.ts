"use server"

type FormData = {
  [key: string]: string
}

export async function sendEmail(formData: FormData, formType: string) {
  try {
    // In a production environment, you would use a proper email sending service
    // like SendGrid, Mailgun, AWS SES, etc.

    // For now, we'll log the data that would be sent
    console.log("Email would be sent to: kostechofficial@gmail.com")
    console.log("Form type:", formType)
    console.log("Form data:", formData)

    // This is where you would integrate with an email service
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: "kostechofficial@gmail.com",
      subject: `New ${formType} Submission from GlobalLogistics Website`,
      text: formatEmailText(formData, formType),
      html: formatEmailHtml(formData, formType),
    })
    */

    // Return success
    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again later.",
    }
  }
}

function formatEmailText(formData: FormData, formType: string): string {
  let text = `New ${formType} Submission\n\n`

  Object.entries(formData).forEach(([key, value]) => {
    // Format the key for better readability
    const formattedKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .replace(/-/g, " ")

    text += `${formattedKey}: ${value}\n`
  })

  return text
}

function formatEmailHtml(formData: FormData, formType: string): string {
  let html = `<h1>New ${formType} Submission</h1><table border="1" cellpadding="5" cellspacing="0">`

  Object.entries(formData).forEach(([key, value]) => {
    // Format the key for better readability
    const formattedKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .replace(/-/g, " ")

    html += `<tr><td><strong>${formattedKey}</strong></td><td>${value}</td></tr>`
  })

  html += `</table>`
  return html
}

export async function submitContactForm(formData: FormData) {
  const result = await sendEmail(formData, "Contact Form")
  if (result.success) {
    // In a real application, you might want to redirect to a thank you page
    // or return the result to show a success message
    return result
  } else {
    return result
  }
}

export async function submitQuoteForm(formData: FormData, quoteType: string) {
  const result = await sendEmail(formData, `Quote Request - ${quoteType}`)
  if (result.success) {
    return result
  } else {
    return result
  }
}

export async function submitTrackingForm(formData: FormData) {
  const result = await sendEmail(formData, "Tracking Assistance Request")
  if (result.success) {
    return result
  } else {
    return result
  }
}

export async function subscribeToNewsletter(formData: FormData) {
  const result = await sendEmail(formData, "Newsletter Subscription")
  if (result.success) {
    return result
  } else {
    return result
  }
}
