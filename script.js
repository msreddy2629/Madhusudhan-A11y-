<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Accessible Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        header {
            background: linear-gradient(90deg, #007acc, #005f99);
            color: #fff;
            padding: 1.5rem 0;
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
        }
        nav ul {
            list-style: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 20px;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease-in-out;
        }
        nav ul li a:hover {
            color: #ffcc00;
        }
        main {
            width: 85%;
            margin: 30px auto;
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        section {
            margin-bottom: 30px;
        }
        h2 {
            color: #007acc;
            border-bottom: 3px solid #007acc;
            padding-bottom: 5px;
            display: inline-block;
        }
        .profile-img {
            display: block;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin: 0 auto;
            border: 3px solid #007acc;
        }
        button {
            background: linear-gradient(90deg, #007acc, #005f99);
            color: white;
            border: none;
            padding: 12px 20px;
            cursor: pointer;
            font-size: 1rem;
            border-radius: 8px;
            transition: transform 0.2s ease-in-out;
        }
        button:hover {
            background: #ffcc00;
            color: #333;
            transform: scale(1.05);
        }
        footer {
            text-align: center;
            padding: 15px;
            background: #007acc;
            color: white;
            position: relative;
            bottom: 0;
            width: 100%;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <h1>My Accessible Portfolio</h1>
        <nav aria-label="Main Navigation">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="about">
            <h2>About Me</h2>
            <img src="profile.jpg" alt="Profile picture of the Accessibility Engineer" class="profile-img">
            <p>Results-driven Accessibility Engineer with extensive experience in driving accessibility initiatives for digital products and services. Expertise in conducting accessibility audits, providing actionable recommendations, and leading teams to implement accessibility best practices...</p>
        </section>
        
        <section id="experience">
            <h2>Experience</h2>
            <p>Seasoned Accessibility Engineer with 3+ years of experience in driving accessibility compliance through Quality Assurance, Production Support, and Requirements Gathering...</p>
        </section>
        
        <section id="skills">
            <h2>Technical Skills</h2>
            <ul>
                <li>Proficient in Accessibility Standards: WCAG, ARIA, WCAG 2.1/2.2, Section 508, ADA</li>
                <li>Experienced with Assistive Technologies: NVDA, JAWS, VoiceOver, TalkBack</li>
                <li>Web Development Knowledge: HTML, CSS, JavaScript</li>
                <li>Tools: JIRA, ANDI, Accessibility Insights, Color Contrast Analyzer, Splunk</li>
            </ul>
        </section>
        
        <section id="projects">
            <h2>Professional Experience</h2>
            <h3>Project #1</h3>
            <p><strong>Employer:</strong> Wipro Ltd. <br><strong>Client:</strong> Microsoft (02/2021-Till Date). <br><strong>Role:</strong> Senior Project Engineer.</p>
            <ul>
                <li>WCAG Compliance Testing: Applied WCAG guidelines to test UI/UX across various products.</li>
                <li>Assistive Technology Testing: Screen readers, voice recognition, speech input tools.</li>
                <li>Bug Lifecycle Management: Logged and tracked bugs in ADO Tool.</li>
                <li>Accessibility Tools Expertise: Used evaluation tools to identify and remediate barriers.</li>
            </ul>
        </section>
        
        <section id="education">
            <h2>Educational Qualifications</h2>
            <p><strong>Birla Institute of Technology and Science, Pilani</strong><br>Master of Technology - MTech, Master of Science Software Engineering.</p>
            <p><strong>NRUPATHUNGA UNIVERSITY</strong><br>Bachelor's degree, Computer Science.</p>
        </section>
        
        <section id="contact">
            <h2>Contact Me</h2>
            <form aria-labelledby="contact">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Send</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 My Accessible Portfolio</p>
    </footer>
</body>
</html>
