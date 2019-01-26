1. What is the purpose of using _sessions_?

    The reason we use sessions is so we can persist a user's interaction with
    our site or api beyond just one endpoint. It allows us to do the more
    complex interactions the web and cloud is known for- logging in.

1. What does bcrypt do to help us store passwords in a secure manner.

    bcrypt allows us to run an algorithm on a raw password and get back a
    hashed password that is generally more secure. In order for a hacker
    to derive the raw password they would have to know what algorithm we
    used, along with having our secret key which helps ensure our hashed
    password is unlike any other system's hashing algorithm.

1. What does bcrypt do to slow down attackers?

    It adds magnitudes of complexity to figuring out the raw password
    from the hashed password. Having a secure secret key and a robust
    password policy aids in making a hashed password virtually hacker-
    proof.

1. What are the three parts of the JSON Web Token?

    Header, Payload, and Signature