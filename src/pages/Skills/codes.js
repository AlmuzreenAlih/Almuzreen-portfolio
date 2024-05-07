const code1 = 
`export async function login(req, res) { 
DebugMsg("On Login Function...");
let username = req.body.username;
let password = req.body.password;

// Check if username is in the database
let stored_user;
try {
    stored_user = await MODEL.selectUserByUsername(username);
    if ((stored_user.length < 1)) {return res.status(409).json({ error: "Wrong username/password" });}
} catch (SQLError) {console.log(SQLError); 
    return res.status(409).json({ error: "An SQL Error occured" });
}

// Check if Password is matched with the stored
const stored_user_id = stored_user[0]['id'];
const stored_user_pw = stored_user[0]['pw'];
try {
    const passwordMatch = await HASH.comparePassword(password, stored_user_pw);
    if (!passwordMatch) {
        return res.status(409).json({ error: "Wrong username/password." });
    }
} catch (ComparingError) { console.log(ComparingError);
    return res.status(409).json({ error: "Password comparing error" });
}

// Insert the browser token
var token = tokenGenerator.generate();
try {
    MODEL.insertGeneratedBrowserToken(stored_user_id, token);
    MODEL.logger("WEB", "account", stored_user_id, stored_user_id, "login");
} catch (SQLError) { console.log(SQLError);
    return res.status(400).json({ error: "An SQL Error occured" });
}

return res.json({authenticated: true, token: token});
}`;

const code2 = 
`import React, { useState } from 'react';

function App() {
    // State to hold the value of input field
    const [inputValue, setInputValue] = useState('');

    // State to hold list of items
    const [items, setItems] = useState([]);

    // Function to handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            // Add new item to the list
            setItems([...items, inputValue]);
            // Clear input field
            setInputValue('');
        }
    };`;

const code3 = 
`import cv2  # Import the OpenCV library for capturing and processing video
import tkinter  # Import the Tkinter library for GUI development
from PIL import Image, ImageTk  # Import modules from the Python Imaging Library (PIL)

# Open video capture device (webcam)
cap = cv2.VideoCapture(0)

# Create a Tkinter window
root = tkinter.Tk()

# Function to close the window when the Escape key is pressed
root.bind('<Escape>', lambda e: root.quit())

# Create a label to display the video feed
VideoFeed = tkinter.Label(root)
VideoFeed.pack()

# Function to continuously capture frames and display them
def show_frame():
    # Read a frame from the video capture device
    _, frame = cap.read()  

    # Convert the frame from BGR to RGBA format
    cv2image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGBA)  

    # Create a PIL Image from the frame
    img = Image.fromarray(cv2image)  

    # Convert the PIL Image to a Tkinter-compatible format
    imgtk = ImageTk.PhotoImage(image=img)  

    # Update the label with the new image
    VideoFeed.imgtk = imgtk  
    VideoFeed.configure(image=imgtk)
    
    # Call this function again after a delay (10 milliseconds in this case)
    VideoFeed.after(10, show_frame)  

# Start displaying frames
show_frame()

# Start the Tkinter event loop
root.mainloop()

`
export {code1, code2, code3};