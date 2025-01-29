import Parse from '../../src/service/parse'

// Define interfaces
interface EmailRequest {
    email: string
}

interface SuccessResponse {
    message: string
}

interface ErrorResponse {
    error: string
}

// Add types to the handler function
export default async function handler(
    req: { method: string; body: EmailRequest },
    res: {
        status: (code: number) => {
            json: (response: SuccessResponse | ErrorResponse) => void
        }
    }
) {
    if (req.method === 'POST') {
        const { email } = req.body

        if (!email) {
            return res.status(400).json({ error: 'Email is required' })
        }

        // Create a new Parse object to store the email
        const Email = Parse.Object.extend('join_audio') // 'Email' is the class/table name in Parse
        const emailEntry = new Email()
        emailEntry.set('email', email)

        try {
            // Save the email to Parse database
            await emailEntry.save()
            res.status(200).json({ message: 'Email stored successfully!' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Failed to store email.' })
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' })
    }
}
