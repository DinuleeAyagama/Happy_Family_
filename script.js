document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    
    const members = {
        mother: {
            name: "Sanumi Rathnaweera",
            role: "Mother",
            age: 38,
            job: "Bank Manager",
            workplace: "Commercial Bank, Colombo",
            phone: "(011) 765-4321",
            email: "sanumi.r@example.com",
            address: "12/3 Galle Road, Colombo 03, Sri Lanka",
            description: "The loving mother of our family. Sanumi manages a local bank branch and is excellent at balancing work and family life. She prepares the best Sri Lankan meals like rice and curry, hoppers, and kottu.",
            health: {
                status: "Good",
                bloodType: "B+",
                allergies: ["None"],
                medications: ["None"],
                lastCheckup: "2023-11-20",
                doctor: "Dr. Silva (011) 234-5678",
                conditions: "None",
                vaccinations: ["COVID-19 (2021)", "Flu (2023)"]
            },
            emergencyContact: {
                name: "Nuwan Munasinghe",
                relation: "Husband",
                phone: "(011) 987-6543"
            },
            education: "BSc in Business Administration, University of Colombo",
            hobbies: "Cooking Sri Lankan cuisine, gardening, reading",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        father: {
            name: "Nuwan Munasinghe",
            role: "Father",
            age: 42,
            job: "Software Architect",
            workplace: "WSO2, Colombo",
            phone: "(011) 987-6543",
            email: "nuwan.m@example.com",
            address: "12/3 Galle Road, Colombo 03, Sri Lanka",
            description: "Our tech-savvy father. Nuwan works at a leading software company and enjoys cricket. He takes the family on trips around Sri Lanka during holidays to places like Galle, Kandy, and Sigiriya.",
            health: {
                status: "Excellent",
                bloodType: "O+",
                allergies: ["None"],
                medications: ["None"],
                lastCheckup: "2023-10-15",
                doctor: "Dr. Fernando (011) 345-6789",
                conditions: "None",
                vaccinations: ["COVID-19 (2021)", "Tetanus (2022)"]
            },
            emergencyContact: {
                name: "Sanumi Rathnaweera",
                relation: "Wife",
                phone: "(011) 765-4321"
            },
            education: "BSc in Computer Science, University of Moratuwa",
            hobbies: "Playing cricket, photography, DIY projects",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        daughter1: {
            name: "Aumi Munasinghe",
            role: "First Daughter",
            age: 14,
            job: "Student",
            workplace: "Colombo International School",
            phone: "(011) 555-1212",
            email: "aumi.m@example.com",
            address: "12/3 Galle Road, Colombo 03, Sri Lanka",
            description: "Our bright and talented teenager. Aumi is in 9th grade and excels in mathematics and science. She participates in school debates and wants to become a doctor.",
            health: {
                status: "Good",
                bloodType: "B+",
                allergies: ["Dust mites"],
                medications: ["Antihistamines as needed"],
                lastCheckup: "2023-09-05",
                doctor: "Dr. Perera - Pediatrician (011) 456-7890",
                conditions: "Mild dust allergy",
                vaccinations: ["All routine vaccinations up to date"]
            },
            emergencyContact: {
                name: "Sanumi Rathnaweera",
                relation: "Mother",
                phone: "(011) 765-4321"
            },
            education: "Grade 9 at Colombo International School",
            hobbies: "Debating, swimming, playing violin",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        daughter2: {
            name: "Nethmi Munasinghe",
            role: "Second Daughter",
            age: 8,
            job: "Student",
            workplace: "Colombo International School",
            phone: "N/A",
            email: "N/A",
            address: "12/3 Galle Road, Colombo 03, Sri Lanka",
            description: "Our cheerful youngest daughter. Nethmi is in 3rd grade and loves dancing and drawing. She enjoys visiting the zoo and Dehiwala beach on weekends.",
            health: {
                status: "Excellent",
                bloodType: "O+",
                allergies: ["None"],
                medications: ["None"],
                lastCheckup: "2023-08-18",
                doctor: "Dr. Perera - Pediatrician (011) 456-7890",
                conditions: "None",
                vaccinations: ["All routine vaccinations up to date"]
            },
            emergencyContact: {
                name: "Nuwan Munasinghe",
                relation: "Father",
                phone: "(011) 987-6543"
            },
            education: "Grade 3 at Colombo International School",
            hobbies: "Bharatanatyam dancing, drawing, swimming",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    };
    
    // DOM Elements
    const navToggle = document.querySelector('.nav-toggle');
    const familyNav = document.querySelector('.family-members-nav');
    const memberLinks = document.querySelectorAll('.member-link');
    const infoContainer = document.getElementById('member-info');
    
    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        familyNav.classList.toggle('active');
    });
    
    // Add click event to each member link
    memberLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const member = this.getAttribute('data-member');
            displayMemberInfo(members[member]);
            
            // Update active state of links
            memberLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            familyNav.classList.remove('active');
        });
    });
    
    // Function to display member information
    function displayMemberInfo(member) {
        // Determine health status class
        let healthStatusClass = 'status-good';
        if (member.health.status === "Good") {
            healthStatusClass = 'status-good';
        } else if (member.health.status === "Fair") {
            healthStatusClass = 'status-ok';
        } else if (member.health.status === "Poor") {
            healthStatusClass = 'status-poor';
        }
        
        // Create allergies list
        const allergiesList = member.health.allergies.map(allergy => 
            `<li>${allergy}</li>`
        ).join('');
        
        // Create vaccinations list
        const vaccinationsList = member.health.vaccinations ? 
            member.health.vaccinations.map(vaccine => 
                `<li>${vaccine}</li>`
            ).join('') : '<li>None</li>';
        
        infoContainer.innerHTML = `
            <div class="member-details">
                <div class="member-header">
                    <img src="${member.image}" alt="${member.name}" class="member-image">
                    <h2 class="member-name">${member.name}</h2>
                    <p class="member-role">${member.role} • Age ${member.age}</p>
                </div>
                
                <div class="member-info-content">
                    <div class="info-section">
                        <h3>Basic Information</h3>
                        <div class="info-grid">
                            <div class="info-item">
                                <span class="info-label">Occupation:</span> ${member.job}
                            </div>
                            <div class="info-item">
                                <span class="info-label">Workplace/School:</span> ${member.workplace}
                            </div>
                            <div class="info-item">
                                <span class="info-label">Education:</span> ${member.education}
                            </div>
                            <div class="info-item">
                                <span class="info-label">Hobbies:</span> ${member.hobbies}
                            </div>
                        </div>
                    </div>
                    
                    <div class="info-section">
                        <h3>Contact Information</h3>
                        <div class="info-grid">
                            <div class="info-item">
                                <span class="info-label">Phone:</span> ${member.phone}
                            </div>
                            <div class="info-item">
                                <span class="info-label">Email:</span> ${member.email}
                            </div>
                            <div class="info-item">
                                <span class="info-label">Address:</span> ${member.address}
                            </div>
                        </div>
                    </div>
                    
                    <div class="info-section">
                        <h3>About</h3>
                        <p>${member.description}</p>
                    </div>
                    
                    <div class="info-section">
                        <h3>Health Information</h3>
                        <div class="info-grid">
                            <div class="info-item">
                                <span class="info-label">Status:</span> 
                                <span class="health-report ${healthStatusClass}">${member.health.status}</span>
                            </div>
                            <div class="info-item">
                                <span class="info-label">Blood Type:</span> ${member.health.bloodType}
                            </div>
                            <div class="info-item">
                                <span class="info-label">Last Checkup:</span> ${member.health.lastCheckup}
                            </div>
                            <div class="info-item">
                                <span class="info-label">Primary Doctor:</span> ${member.health.doctor}
                            </div>
                        </div>
                        
                        <div class="health-report">
                            <h4>Medical Details</h4>
                            <div class="info-grid">
                                <div>
                                    <p><strong>Allergies:</strong></p>
                                    <ul class="allergies-list">
                                        ${allergiesList}
                                    </ul>
                                </div>
                                <div>
                                    <p><strong>Vaccinations:</strong></p>
                                    <ul class="allergies-list">
                                        ${vaccinationsList}
                                    </ul>
                                </div>
                            </div>
                            <p><strong>Medications:</strong> ${member.health.medications.join(", ") || "None"}</p>
                            <p><strong>Conditions:</strong> ${member.health.conditions || "None"}</p>
                        </div>
                    </div>
                    
                    <div class="info-section">
                        <h3>Emergency Contact</h3>
                        <div class="info-grid">
                            <div class="info-item">
                                <span class="info-label">Name:</span> ${member.emergencyContact.name}
                            </div>
                            <div class="info-item">
                                <span class="info-label">Relation:</span> ${member.emergencyContact.relation}
                            </div>
                            <div class="info-item">
                                <span class="info-label">Phone:</span> ${member.emergencyContact.phone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add active class to show the info container
        infoContainer.classList.add('active');
    }
    
    // Show mother's info by default
    const motherLink = document.querySelector('.member-link[data-member="mother"]');
    motherLink.click();
});