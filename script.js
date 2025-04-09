const teams = {
    'Team Alpha': [
        'Tejaswini B Hugar',
        'Shashikumar Mulimani',
        'Nivedita S Kyalakonda',
        'Swayam',
    ],
    'Team Beta': [
        'Manish Pawar',
        'Akshtha S Nelagudda',
        'Siddharaju Malagi',
        'Satish Jamakhandi',
    ]
};

function createParticipantElement(name) {
    const li = document.createElement('li');
    li.className = 'participant';
    
    const avatar = document.createElement('div');
    avatar.className = 'participant-avatar';
    avatar.textContent = name.charAt(0);
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'participant-name';
    nameSpan.textContent = name;
    
    li.appendChild(avatar);
    li.appendChild(nameSpan);
    
    return li;
}

function initializeTeams() {
    const teamAlphaList = document.getElementById('team-alpha');
    const teamBetaList = document.getElementById('team-beta');
    
    teams['Team Alpha'].forEach(participant => {
        teamAlphaList.appendChild(createParticipantElement(participant));
    });
    
    teams['Team Beta'].forEach(participant => {
        teamBetaList.appendChild(createParticipantElement(participant));
    });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeTeams);