// States with orgs - only 5 at this moment
// Arizona, Georgia, North Carolina, Pennsylvania, Wisconsin
// Every other state gets a default national option value - which is set by default already on the result page if nothing is selected in the quiz

const arizona = {
	id: 1,
	state: 'arizona',
	stateOnlyGroupTitle: 'Citizens\' Climate Lobby - At Large, Arizona',
	stateOnlyGroupDescription: 'Citizens\' Climate Lobby empowers everyday people in Arizona to work within their communities and members of Congress on solutions to climate change. ',
	stateOnlyGroupLink: 'https://citizensclimatelobby.org/chapters/Arizona_-_At_Large/',
	ideology: {
		liberalGroupTitle: 'League of Conservation Voters',
		liberalGroupDescription: 'LCV influences policy, holds politicians accountable, and wins elections. They fight to build a world with clean air, clean water, public lands, and a safe climate that are protected by a just and equitable democracy.',
		liberalGroupLink: 'https://www.lcv.org/mission/',
		conservativeGroupTitle: 'Citizens for Responsible Energy Solutions',
		conservativeGroupDescription: 'Citizens for Responsible Energy Solutions engages Republican policymakers and the public about responsible, conservative solutions to address our nation\'s energy, economic and environmental security while increasing America\'s competitive edge.',
		conservativeGroupLink: 'https://cresenergy.com/',
		moderateGroupTitle: 'Environmental Defense Fund',
		moderateGroupDescription: 'The Environmental Defense Fund creates transformational solutions to climate change and other environmental problems.',
		moderateGroupLink: 'https://www.edf.org/climate'
	},
	school: {
		yesSchoolGroupTitle: 'Moms Clean Air Force Arizona',
		yesSchoolGroupDescription: 'Moms Clean Air Force is a community of moms and dads in Arizona united to protect children from air pollution including the urgent crisis of climate change.',
		yesSchoolGroupLink: 'https://www.momscleanairforce.org/state-chapters/arizona/',
		noSchoolGroup: 'No school group'
	},
	ethnicity: {
		hispanicGroupTitle: 'Chispa Arizona',
		hispanicGroupDescription: 'Chispa Arizona is growing latinx voices, political power and civic engagement for a cleaner future in Arizona.',
		hispanicGroupLink: 'https://chispalcv.org/state/arizona/',
		africanAmericanGroupTitle: 'African American Group',
		africanAmericanGroupDescription: 'African American Group Description',
		africanAmericanGroupLink: '#'
	},
	faith: {
		yesFaithGroupTitle: 'Arizona Interfaith Power & Light',
		yesFaithGroupDescription: 'Interfaith Power and Light works with congregations of all faiths in Arizona to save energy, go green and respond to climate change.',
		yesFaithGroupLink: 'https://www.azipl.org',
		noFaithGroup: 'No faith group'
	}
}

const georgia = {
	id: 2,
	state: 'georgia',
	stateOnlyGroupTitle: 'Citizens\' Climate Lobby - Atlanta, GA Chapter',
	stateOnlyGroupDescription: 'Citizens\' Climate Lobby empowers everyday people in Georgia to work within their communities and members of Congress on solutions to climate change.',
	stateOnlyGroupLink: 'https://citizensclimatelobby.org/chapters/GA_Atlanta/',
	ideology: {
		liberalGroupTitle: 'The Climate Reality Project - Atlanta, GA Chapter',
		liberalGroupDescription: 'The Climate Reality Project is a diverse group of individuals who have come together in Georgia to solve climate change and build a sustainable future.',
		liberalGroupLink: 'https://www.climaterealityproject.org/chapters-program#georgia',
		conservativeGroupTitle: 'Conservatives for Clean Energy Georgia',
		conservativeGroupDescription: 'Georgia Conservatives for Clean Energy promotes free markets, more competition and a diverse portfolio of renewable energy resources to enhance quality of life and provide for security.',
		conservativeGroupLink: 'https://www.cleanenergyconservatives.com/states/georgia/',
		moderateGroupTitle: 'Environmental Defense Fund',
		moderateGroupDescription: 'The Environmental Defense Fund creates transformational solutions to climate change and other environmental problems.',
		moderateGroupLink: 'https://www.edf.org/climate'
	},
	school: {
		yesSchoolGroupTitle: 'Moms Clean Air Force Georgia',
		yesSchoolGroupDescription: 'Moms Clean Air Force is a community of moms and dads in Georgia united to protect children from  air pollution including the urgent crisis of climate change.',
		yesSchoolGroupLink: 'https://www.momscleanairforce.org/state-chapters/georgia/',
		noSchoolGroup: 'No school group'
	},
	ethnicity: {
		hispanicGroupTitle: 'Poder Latinx Georgia',
		hispanicGroupDescription: 'Georgia Poder Latinx focuses on economic, immigrant and climate justice and centers the voices of those communiites most affected to be decisionmakers.',
		hispanicGroupLink: 'https://poderlatinx.org/georgia',
		africanAmericanGroupTitle: 'Green The Church',
		africanAmericanGroupDescription: 'Green the Church is a sustainability inititiative to tap into the power and purpose of the Black Church Community to "go green."',
		africanAmericanGroupLink: 'https://www.greenthechurch.org/'
	},
	faith: {
		yesFaithGroupTitle: 'Georgia Interfaith Power and Light',
		yesFaithGroupDescription: 'Interfaith Power and Light works with congregations of all faiths in Georgia to save energy, go green and respond to climate change.',
		yesFaithGroupLink: 'https://gipl.org',
		noFaithGroup: 'No faith group'
	}
}

const general = {
	id: 6,
	groupOneTitle: 'Citizen\'s Climate Lobby',
	groupOneDescription: 'Citizen\'s Climate Lobby empowers everyday people to work within their communities and members of Congress on solutions to climate change.',
	groupOneLink: 'https://citizensclimatelobby.org/about-ccl/chapters/',
	ideology: {
		liberalGroupTitle: 'The Climate Reality Project',
		liberalGroupDescription: 'The Climate Reality Project is a diverse group of individuals who have come together to solve climate change and build a sustainable future.',
		liberalGroupLink: 'https://www.climaterealityproject.org/chapters',
		conservativeGroupTitle: 'Citizens for Responsible Energy Solutions',
		conservativeGroupDescription: 'Citizens for Responsible Energy Solutions engages Republican policymakers and the public about responsible, conservative solutions to address our nation\'s energy, economic and environmental security while increasing America\'s competitive edge.',
		conservativeGroupLink: 'https://cresenergy.com/',
		moderateGroupTitle: 'Environmental Defense Fund',
		moderateGroupDescription: 'The Environmental Defense Fund creates transformational solutions to climate change and other environmental problems.',
		moderateGroupLink: 'https://www.edf.org/climate'
	},
	school: {
		yesSchoolGroupTitle: 'Moms Clean Air Force',
		yesSchoolGroupDescription: 'Moms Clean Air Force is a community of over one million moms and dads united to protect children from  air pollution including the urgent crisis of climate change.',
		yesSchoolGroupLink: 'https://www.momscleanairforce.org/',
	},
	ethnicity: {
		hispanicGroupTitle: 'Ecomadres - Moms Clean Air Force',
		hispanicGroupDescription: 'EcoMadres brings Latina moms together to address issues of clean air, climate and toxics that affect the health of Latino children and families.',
		hispanicGroupLink: 'https://www.momscleanairforce.org/ecomadres/',
		africanAmericanGroupTitle: 'NAACP',
		africanAmericanGroupDescription: 'NAACP\'s Environmental and Justice program works to reduce harmful emissions, particularly greenhouse gases, advances energy efficiency and clean energy and strengthen\'s community resilience and livability.',
		africanAmericanGroupLink: 'https://naacp.org/know-issues/environmental-climate-justice',
	},
	faith: {
		faithGroupTitle: 'Interfaith Power and Light',
		faithGroupDescription: 'Interfaith Power and Light works with hundreds of congregations of all faiths to save energy, go green and respond to climate change.',
		faithGroupLink: 'https://www.interfaithpowerandlight.org/'
	}
}

// Result object gets populated based on quiz responses
let result = { 
	state: '', 
	ideology: '',
	school: '',
	ethnicity: '',
	faith: '' 
};

// UI javascript
const paginationUI = (e) => {
	const questionCountAll = document.querySelectorAll('.question-count');
	const questionCountOne = document.querySelector('.question-count-1');
	const questionCountTwo = document.querySelector('.question-count-2');
	const questionCountThree = document.querySelector('.question-count-3');
	const questionCountFour = document.querySelector('.question-count-4');
	const questionCountFive = document.querySelector('.question-count-5');
	
	const allQuestions = document.querySelectorAll('.question');
	const questionOne = document.querySelector('.question-1');
	const questionTwo = document.querySelector('.question-2');
	const questionThree = document.querySelector('.question-3');
	const questionFour = document.querySelector('.question-4');
	const questionFive = document.querySelector('.question-5');
	
	// Question Count 1
	if(e.target.classList.contains('question-count-1')) {
		if(e.target.classList.contains('active')) {
			// do nothing
		}else {
			// Remove active class from all question counts
			questionCountAll.forEach((allQuestions) => {
				allQuestions.classList.remove('active');
			});
			// Add active class to current question count 
			e.target.classList.add('active');
			
			// Hide all questions
			allQuestions.forEach((allQuestions) => {
				allQuestions.classList.add('hidden');
			});
			
			// Except for current question
			questionOne.classList.remove('hidden');
		}
	}
	
	// Question Count 2
	if(e.target.classList.contains('question-count-2')) {
		if(e.target.classList.contains('active')) {
			// do nothing
		}else {
			// Remove active class from all question counts
			questionCountAll.forEach((allQuestions) => {
				allQuestions.classList.remove('active');
			});
			// Add active class to current question count
			e.target.classList.add('active');
			
			// Hide all questions
			allQuestions.forEach((allQuestions) => {
				allQuestions.classList.add('hidden');
			});
			
			// Except for current question
			questionTwo.classList.remove('hidden');
		}
	}
	
	// Question Count 3
	if(e.target.classList.contains('question-count-3')) {
		if(e.target.classList.contains('active')) {
			// do nothing
		}else {
			// Remove active class from all question counts
			questionCountAll.forEach((allQuestions) => {
				allQuestions.classList.remove('active');
			});
			// Add active class to current question count
			e.target.classList.add('active');
			
			// Hide all questions
			allQuestions.forEach((allQuestions) => {
				allQuestions.classList.add('hidden');
			});
			
			// Except for current question
			questionThree.classList.remove('hidden');
		}
	}
	
	// Question Count 4
	if(e.target.classList.contains('question-count-4')) {
		if(e.target.classList.contains('active')) {
			// do nothing
		}else {
			// Remove active class from all question counts
			questionCountAll.forEach((allQuestions) => {
				allQuestions.classList.remove('active');
			});
			// Add active class to current question count
			e.target.classList.add('active');
			
			// Hide all questions
			allQuestions.forEach((allQuestions) => {
				allQuestions.classList.add('hidden');
			});
			
			// Except for current question
			questionFour.classList.remove('hidden');
		}
	}
	
	// Question Count 5
	if(e.target.classList.contains('question-count-5')) {
		if(e.target.classList.contains('active')) {
			// do nothing
		}else {
			// Remove active class from all question counts
			questionCountAll.forEach((allQuestions) => {
				allQuestions.classList.remove('active');
			});
			// Add active class to current question count
			e.target.classList.add('active');
			
			// Hide all questions
			allQuestions.forEach((allQuestions) => {
				allQuestions.classList.add('hidden');
			});
			
			// Except for current question
			questionFive.classList.remove('hidden');
		}
	}
}

// Apply pagination UI
const questionCount = document.querySelectorAll('.question-count');

questionCount.forEach((questionNumber) => {
	questionNumber.addEventListener('click', (e) => {
		paginationUI(e);
	})
});

// Next button behavior - update pagination count as well
const btnNextAll = document.querySelectorAll('.btn-next');
const questionAll = document.querySelectorAll('.question');
const questionCountAll = document.querySelectorAll('.question-count');
const questionCountOne = document.querySelector('.question-count-1');
const questionCountTwo = document.querySelector('.question-count-2');
const questionCountThree = document.querySelector('.question-count-3');
const questionCountFour = document.querySelector('.question-count-4');
const questionCountFive = document.querySelector('.question-count-5');

btnNextAll.forEach((btn) => {
	btn.addEventListener('click', () => {
		questionAll.forEach((questionAll) => {
			questionAll.classList.add('hidden');		
		});
	
		btn.closest('.question').nextElementSibling.classList.remove('hidden');
		// Update pagination position
		// Question count 1 -> 2
		if(btn.closest('.question').nextElementSibling.classList.contains('question-2')) {
			questionCountAll.forEach((allQuestions) => {
				questionCountAll.forEach((allQuestions) => {
					allQuestions.classList.remove('active');
				});
			});
			
			// Update current pagination count (2)
			questionCountTwo.classList.add('active');
			
			// Set state value & set value in local storage
			const stateOptions = document.querySelector('.state-options');
			// Update result object with state
			result.state = stateOptions.value;
			console.log(result);
		}
		
		// Question count 2 -> 3
		if(btn.closest('.question').nextElementSibling.classList.contains('question-3')) {
			questionCountAll.forEach((allQuestions) => {
				questionCountAll.forEach((allQuestions) => {
					allQuestions.classList.remove('active');
				});
			});
			
			// Update current pagination count (3)
			questionCountThree.classList.add('active');
			
			// Set ideology value & set value in local storage
			const ideologyOptions = document.querySelector('.ideology-options');
			// Update result object with ideology
			result.ideology = ideologyOptions.value;
			console.log(result);
		}
		
		// Question count 3 -> 4
		if(btn.closest('.question').nextElementSibling.classList.contains('question-4')) {
			questionCountAll.forEach((allQuestions) => {
				questionCountAll.forEach((allQuestions) => {
					allQuestions.classList.remove('active');
				});								
			});
			
			// Update current pagination count (4)
			questionCountFour.classList.add('active');
			
			// Set school value & set value in local storage
			const yesSchool = document.querySelector('.yes-school');
			const noSchool = document.querySelector('.no-school');
			
			if(yesSchool.checked === true) {
				noSchool.checked === false;
				//console.log('Yes school true');
				// Update result object with school option
				result.school = 'yes';
				console.log(result);
			}else if(noSchool.checked === true) {
				yesSchool.checked === false;
				//console.log('No school true');
				// Update result object with school option
				result.school = 'no';
				console.log(result);
			}
		}
		
		// Question count 4 -> 5
		if(btn.closest('.question').nextElementSibling.classList.contains('question-5')) {
			questionCountAll.forEach((allQuestions) => {
				questionCountAll.forEach((allQuestions) => {
					allQuestions.classList.remove('active');
				});								
			});
			
			// Update current pagination count (5)
			questionCountFive.classList.add('active');
			
			// Set ethnicity value & set value in local storage
			const ethnicityOptions = document.querySelector('.ethnicity-options');
			//console.log(ethnicityOptions.value);
			result.ethnicity = ethnicityOptions.value;
			console.log(result);
		}
	});
});

// School Radio buttons behavior
const yesSchool = document.querySelector('.yes-school');
const noSchool = document.querySelector('.no-school');

yesSchool.addEventListener('click', () => {
	//console.log(yesSchool.checked);
	noSchool.checked = false;
});

noSchool.addEventListener('click', () => {
	//console.log(noSchool.checked);
	yesSchool.checked = false;
});

// Next button (btn-next-five) for cta-section 
const btnNextFive = document.querySelector('.btn-next-five');
const ctaSection = document.querySelector('.cta-section');
const pagination = document.querySelector('.pagination');
const yesFaith = document.querySelector('.yes-faith');
const noFaith = document.querySelector('.no-faith');

btnNextFive.addEventListener('click', () => {
	questionAll.forEach((allQuestions) => {
		allQuestions.classList.add('hidden');
	});
	
	ctaSection.classList.remove('hidden');
	pagination.classList.add('hidden');
	
	// Set Faith value
	if(yesFaith.checked === true) {
		noFaith.checked === false;
		//console.log('Yes faith true');
		result.faith = 'yes';
		console.log(result);
	}else if(noFaith.checked === true) {
		yesFaith.checked === false;
		//console.log('No faith true');
		result.faith = 'no';
		console.log(result);
	}
});

// Faith Radio buttons behavior
yesFaith.addEventListener('click', () => {
	//console.log(yesFaith.checked);
	noFaith.checked = false;
});

noFaith.addEventListener('click', () => {
	//console.log(noFaith.checked);
	yesFaith.checked = false;
});

// Cta section
const btnDiscover = document.querySelector('.btn-discover');
const captureEmail = document.querySelector('.capture-email');
const endScreen = document.querySelector('.end-screen');

btnDiscover.addEventListener('click', () => {
	if(captureEmail.value === '') {
		alert('Please enter your email address');
	}else {
		ctaSection.classList.add('hidden');
		endScreen.classList.remove('hidden');
		
		// Org output variables
		const orgOneTitle = document.querySelector('.org-one-title');
		const orgOneDescription = document.querySelector('.org-one-description');
		const orgOneLink = document.querySelector('.org-one-link');
		const orgOneLinkText = document.querySelector('.org-one-link-text');
		
		const orgTwoTitle = document.querySelector('.org-two-title');
		const orgTwoDescription = document.querySelector('.org-two-description');
		const orgTwoLink = document.querySelector('.org-two-link');
		const orgTwoLinkText = document.querySelector('.org-two-link-text');
		
		const orgThreeTitle = document.querySelector('.org-three-title');
		const orgThreeDescription = document.querySelector('.org-three-description');
		const orgThreeLink = document.querySelector('.org-three-link');
		const orgThreeLinkText = document.querySelector('.org-three-link-text');
		
		const orgFourTitle = document.querySelector('.org-four-title');
		const orgFourDescription = document.querySelector('.org-four-description');
		const orgFourLink = document.querySelector('.org-four-link');
		const orgFourLinkText = document.querySelector('.org-four-link-text');
		
		const orgFiveTitle = document.querySelector('.org-five-title');
		const orgFiveDescription = document.querySelector('.org-five-description');
		const orgFiveLink = document.querySelector('.org-five-link');
		const orgFiveLinkText = document.querySelector('.org-five-link-text');
		
		// Output org results for states that have no state option (Results are pulled from the general object)
		// Display Org One - related to ideology
		if(result.state === 'none' && result.ideology === 'conservative') {			
			// Pull data from general object
			orgOneTitle.innerHTML = general.ideology.conservativeGroupTitle;
			orgOneDescription.innerHTML = general.ideology.conservativeGroupDescription;
			orgOneLinkText.innerHTML = general.ideology.conservativeGroupTitle;
			orgOneLink.href = general.ideology.conservativeGroupLink;
		}
		else if(result.state === 'none' && result.ideology === 'liberal') {
			orgOneTitle.innerHTML = general.ideology.liberalGroupTitle;
			orgOneDescription.innerHTML = general.ideology.liberalGroupDescription;
			orgOneLinkText.innerHTML = general.ideology.liberalGroupTitle;
			orgOneLink.href = general.ideology.liberalGroupLink;
		}
		else if(result.state === 'none' && result.ideology === 'moderate') {
			orgOneTitle.innerHTML = general.ideology.moderateGroupTitle;
			orgOneDescription.innerHTML = general.ideology.moderateGroupDescription;
			orgOneLinkText.innerHTML = general.ideology.moderateGroupTitle;
			orgOneLink.href = general.ideology.moderateGroupLink;
		}
		
		// Display Org Two - No state option - conservative ideology - faith option is yes
		if(result.state === 'none' && result.ideology === 'conservative' && result.faith === 'yes') {			
			// Pull data from general object
			orgTwoTitle.innerHTML = general.faith.faithGroupTitle;
			orgTwoDescription.innerHTML = general.faith.faithGroupDescription;
			orgTwoLinkText.innerHTML = general.faith.faithGroupTitle;
			orgTwoLink.href = general.faith.faithGroupLink;
		}
		
		// Display Org Three - No state option - school age kids option is yes
		if(result.state === 'none' && result.school === 'yes') {			
			// Pull data from general object
			orgThreeTitle.innerHTML = general.school.yesSchoolGroupTitle;
			orgThreeDescription.innerHTML = general.school.yesSchoolGroupDescription;
			orgThreeLinkText.innerHTML = general.school.yesSchoolGroupTitle;
			orgThreeLink.href = general.school.yesSchoolGroupLink;
		}
		
		// Display Org Four - No state option - related to ethnicity
		if(result.state === 'none' && result.ethnicity === 'hispanic') {			
			// Pull data from general object
			orgFourTitle.innerHTML = general.ethnicity.hispanicGroupTitle;
			orgFourDescription.innerHTML = general.ethnicity.hispanicGroupDescription;
			orgFourLinkText.innerHTML = general.ethnicity.hispanicGroupTitle;
			orgFourLink.href = general.ethnicity.hispanicGroupLink;
		}
		else if(result.state === 'none' && result.ethnicity === 'african american') {			
			// Pull data from general object
			orgFourTitle.innerHTML = general.ethnicity.africanAmericanGroupTitle;
			orgFourDescription.innerHTML = general.ethnicity.africanAmericanGroupDescription;
			orgFourLinkText.innerHTML = general.ethnicity.africanAmericanGroupTitle;
			orgFourLink.href = general.ethnicity.africanAmericanGroupLink;
		}
		
		// Display Org Five - No state option - related to faith
		if(result.state === 'none' && result.ideology !== 'conservative' && result.faith === 'yes') {			
			// Pull data from general object
			orgFiveTitle.innerHTML = general.faith.faithGroupTitle;
			orgFiveDescription.innerHTML = general.faith.faithGroupDescription;
			orgFiveLinkText.innerHTML = general.faith.faithGroupTitle;
			orgFiveLink.href = general.faith.faithGroupLink;
		}
		
		// Output org results for Arizona
		// Display Org One - related to ideology
		if(result.state === 'arizona' && result.ideology === 'conservative') {			
			// Pull data from arizona object
			orgOneTitle.innerHTML = arizona.ideology.conservativeGroupTitle;
			orgOneDescription.innerHTML = arizona.ideology.conservativeGroupDescription;
			orgOneLinkText.innerHTML = arizona.ideology.conservativeGroupTitle;
			orgOneLink.href = arizona.ideology.conservativeGroupLink;
		}
		else if(result.state === 'arizona' && result.ideology === 'liberal') {
			orgOneTitle.innerHTML = arizona.ideology.liberalGroupTitle;
			orgOneDescription.innerHTML = arizona.ideology.liberalGroupDescription;
			orgOneLinkText.innerHTML = arizona.ideology.liberalGroupTitle;
			orgOneLink.href = arizona.ideology.liberalGroupLink;
		}
		else if(result.state === 'arizona' && result.ideology === 'moderate') {
			orgOneTitle.innerHTML = arizona.ideology.moderateGroupTitle;
			orgOneDescription.innerHTML = arizona.ideology.moderateGroupDescription;
			orgOneLinkText.innerHTML = arizona.ideology.moderateGroupTitle;
			orgOneLink.href = arizona.ideology.moderateGroupLink;
		}
		
		// Display Org Two - related to school age children
		if(result.state === 'arizona' && result.school === 'yes') {
			orgTwoTitle.innerHTML = arizona.school.yesSchoolGroupTitle;
			orgTwoDescription.innerHTML = arizona.school.yesSchoolGroupDescription;
			orgTwoLinkText.innerHTML = arizona.school.yesSchoolGroupTitle;
			orgTwoLink.href = arizona.school.yesSchoolGroupLink;
		}
		
		// Display Org Three - related to ethnicity
		if(result.state === 'arizona' && result.ethnicity === 'hispanic') {
			orgThreeTitle.innerHTML = arizona.ethnicity.hispanicGroupTitle;
			orgThreeDescription.innerHTML = arizona.ethnicity.hispanicGroupDescription;
			orgThreeLinkText.innerHTML = arizona.ethnicity.hispanicGroupTitle;
			orgThreeLink.href = arizona.ethnicity.hispanicGroupLink;
		}
		else if(result.state === 'arizona' && result.ethnicity === 'african american') {
			orgThreeTitle.innerHTML = arizona.ethnicity.africanAmericanGroupTitle;
			orgThreeDescription.innerHTML = arizona.ethnicity.africanAmericanGroupDescription;
			orgThreeLinkText.innerHTML = arizona.ethnicity.africanAmericanGroupTitle;
			orgThreeLink.href = arizona.ethnicity.africanAmericanGroupLink;
		}
		
		// Display Org Four - related to faith
		if(result.state === 'arizona' && result.faith === 'yes') {
			orgFourTitle.innerHTML = arizona.faith.yesFaithGroupTitle;
			orgFourDescription.innerHTML = arizona.faith.yesFaithGroupDescription;
			orgFourLinkText.innerHTML = arizona.faith.yesFaithGroupTitle;
			orgFourLink.href = arizona.faith.yesFaithGroupLink;
		}
		
		// Output org results for Georgia
		// Display Org One - related to ideology
		if(result.state === 'georgia' && result.ideology === 'conservative') {			
			// Pull data from georgia object
			orgOneTitle.innerHTML = georgia.ideology.conservativeGroupTitle;
			orgOneDescription.innerHTML = georgia.ideology.conservativeGroupDescription;
			orgOneLinkText.innerHTML = georgia.ideology.conservativeGroupTitle;
			orgOneLink.href = georgia.ideology.conservativeGroupLink;
		}
		else if(result.state === 'georgia' && result.ideology === 'liberal') {
			orgOneTitle.innerHTML = georgia.ideology.liberalGroupTitle;
			orgOneDescription.innerHTML = georgia.ideology.liberalGroupDescription;
			orgOneLinkText.innerHTML = georgia.ideology.liberalGroupTitle;
			orgOneLink.href = georgia.ideology.liberalGroupLink;
		}
		else if(result.state === 'georgia' && result.ideology === 'none') {
			orgOneTitle.innerHTML = georgia.stateOnlyGroupTitle;
			orgOneDescription.innerHTML = georgia.stateOnlyGroupDescription;
			orgOneLinkText.innerHTML = georgia.stateOnlyGroupTitle;
			orgOneLink.href = georgia.stateOnlyGroupLink;
		}
		
		// Display Org Two - related to school age children
		if(result.state === 'georgia' && result.school === 'yes') {
			orgTwoTitle.innerHTML = georgia.school.yesSchoolGroupTitle;
			orgTwoDescription.innerHTML = georgia.school.yesSchoolGroupDescription;
			orgTwoLinkText.innerHTML = georgia.school.yesSchoolGroupTitle;
			orgTwoLink.href = georgia.school.yesSchoolGroupLink;
		}
		
		// Display Org Three - related to ethnicity
		if(result.state === 'georgia' && result.ethnicity === 'hispanic') {
			orgThreeTitle.innerHTML = georgia.ethnicity.hispanicGroupTitle;
			orgThreeDescription.innerHTML = georgia.ethnicity.hispanicGroupDescription;
			orgThreeLinkText.innerHTML = georgia.ethnicity.hispanicGroupTitle;
			orgThreeLink.href = georgia.ethnicity.hispanicGroupLink;
		}
		else if(result.state === 'georgia' && result.ethnicity === 'african american') {
			orgThreeTitle.innerHTML = georgia.ethnicity.africanAmericanGroupTitle;
			orgThreeDescription.innerHTML = georgia.ethnicity.africanAmericanGroupDescription;
			orgThreeLinkText.innerHTML = georgia.ethnicity.africanAmericanGroupTitle;
			orgThreeLink.href = georgia.ethnicity.africanAmericanGroupLink;
		}
		
		// Display Org Four - related to faith
		if(result.state === 'georgia' && result.faith === 'yes') {
			orgFourTitle.innerHTML = georgia.faith.yesFaithGroupTitle;
			orgFourDescription.innerHTML = georgia.faith.yesFaithGroupDescription;
			orgFourLinkText.innerHTML = georgia.faith.yesFaithGroupTitle;
			orgFourLink.href = georgia.faith.yesFaithGroupLink;
		}
		
	}
});
