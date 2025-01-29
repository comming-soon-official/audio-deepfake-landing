'use client'
import Parse from 'parse/node'

// Initialize Parse
Parse.initialize(
    process.env.NEXT_PUBLIC_PARSE_APP_ID!,
    process.env.NEXT_PUBLIC_PARSE_JS_KEY!
)

// Set Parse Server URL
Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL!

export default Parse
