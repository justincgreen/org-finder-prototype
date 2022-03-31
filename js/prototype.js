// States with orgs - only 5 at this moment
// Arizona, Georgia, North Carolina, Pennsylvania, Wisconsin
// Every other state gets a default national option value - which is set by default already on the result page if nothing is selected in the quiz

// Arizona
const AZ = {
	id: 1,
	state: 'arizona',
	stateGroupTitle: 'Citizens\' Climate Lobby - At Large, Arizona',
	stateGroupDescription: 'Citizens\' Climate Lobby empowers everyday people in Arizona to work within their communities and members of Congress on solutions to climate change. ',
	stateGroupLink: 'https://citizensclimatelobby.org/chapters/Arizona_-_At_Large/',
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
		africanAmericanGroupTitle: 'NAACP',
		africanAmericanGroupDescription: 'NAACP\'s Environmental and Justice program works to reduce harmful emissions, particularly greenhouse gases, advances energy efficiency and clean energy and strengthen\'s community resilience and livability.',
		africanAmericanGroupLink: 'https://naacp.org/know-issues/environmental-climate-justice'
	},
	faith: {
		yesFaithGroupTitle: 'Arizona Interfaith Power & Light',
		yesFaithGroupDescription: 'Interfaith Power and Light works with congregations of all faiths in Arizona to save energy, go green and respond to climate change.',
		yesFaithGroupLink: 'https://www.azipl.org',
		noFaithGroup: 'No faith group'
	}
}

// Georgia
const GA = {
	id: 2,
	state: 'georgia',
	stateGroupTitle: 'Citizens\' Climate Lobby - Atlanta, GA Chapter',
	stateGroupDescription: 'Citizens\' Climate Lobby empowers everyday people in Georgia to work within their communities and members of Congress on solutions to climate change.',
	stateGroupLink: 'https://citizensclimatelobby.org/chapters/GA_Atlanta/',
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

// North Carolina
const NC = {
	id: 3,
	state: 'north carolina',
	stateGroupTitle: 'Citizens\' Climate Lobby - Charlotte, NC Chapter',
	stateGroupDescription: 'Citizens\' Climate Lobby empowers everyday people in North Carolina to work within their communities and members of Congress on solutions to climate change.',
	stateGroupLink: 'https://community.citizensclimate.org/groups/home/1410',
	ideology: {
		liberalGroupTitle: 'The Climate Reality Project - Charlotte, NC Chapter',
		liberalGroupDescription: 'The Climate Reality Project is a diverse group of individuals in North Carolina who have come together to solve climate change and build a sustainable future.',
		liberalGroupLink: 'https://www.climaterealityproject.org/chapters-program#northcarolina',
		conservativeGroupTitle: 'Conservatives for Clean Energy North Carolina',
		conservativeGroupDescription: 'Conservatives for Clean Energy educates the public and decisionmakers on the economic benefits of clean energy and advocates for continued investment.',
		conservativeGroupLink: 'https://www.cleanenergyconservatives.com/states/north-carolina/',
		moderateGroupTitle: 'Environmental Defense Fund',
		moderateGroupDescription: 'The Environmental Defense Fund creates transformational solutions to climate change and other environmental problems.',
		moderateGroupLink: 'https://www.edf.org/climate'
	},
	school: {
		yesSchoolGroupTitle: 'Moms Clean Air Force North Carolina',
		yesSchoolGroupDescription: 'Moms Clean Air Force is a community of moms and dads in North Carolina united to protect children from air pollution including the urgent crisis of climate change.',
		yesSchoolGroupLink: 'https://www.momscleanairforce.org/volunteer-states/north-carolina/',
		noSchoolGroup: 'No school group'
	},
	ethnicity: {
		hispanicGroupTitle: 'Green Latinos',
		hispanicGroupDescription: 'Green Latinos is a coalition of Latino leaders committed to addressing national, regional and local environmental, natural resources and conservations issues that affect the health and welfare of the U.S. Latino community.',
		hispanicGroupLink: 'https://www.greenlatinos.org/climate-and-clean-airhttps://www.greenlatinos.org/climate-and-clean-air',
		africanAmericanGroupTitle: 'North Carolina Environmental Justice Network',
		africanAmericanGroupDescription: 'The North Carolina Enviromental Justice Network is a grassroots, people of color-led coalition of community organizations and their supporters working on issues of climate change, environmnental, racial and social injustice.',
		africanAmericanGroupLink: 'https://ncejn.org/issues/'
	},
	faith: {
		yesFaithGroupTitle: 'North Carolina Interfaith Power & Light',
		yesFaithGroupDescription: 'Interfaith Power and Light works with congregations of all faiths in North Carolina to save energy, go green and respond to climate change.',
		yesFaithGroupLink: 'https://ncipl.org',
		noFaithGroup: 'No faith group'
	}
}

// Pennsylvania
const PA = {
	id: 4,
	state: 'pennsylvania',
	stateGroupTitle: 'Citizens\' Climate Lobby - Philadelphia, PA Chapter',
	stateGroupDescription: 'Citizens\' Climate Lobby empowers everyday people in Pennsylvania to work within their communities and members of Congress on solutions to climate change.',
	stateGroupLink: 'https://community.citizensclimate.org/groups/home/1178',
	ideology: {
		liberalGroupTitle: 'The Climate Reality Project - Lehigh Valley, PA Chapter',
		liberalGroupDescription: 'The Climate Reality Project is a diverse group of individuals in Pennsylvania who have come together to solve climate change and build a sustainable future.',
		liberalGroupLink: 'https://www.climaterealityproject.org/chapters-program#pennsylvania',
		conservativeGroupTitle: 'Citizens for Responsible Energy Solutions',
		conservativeGroupDescription: 'Citizens for Responsible Energy Solutions engages Republican policymakers and the public about responsible, conservative solutions to address our nation\'s energy, economic and environmental security while increasing America\'s competitive edge.',
		conservativeGroupLink: 'https://cresenergy.com/',
		moderateGroupTitle: 'Environmental Defense Fund',
		moderateGroupDescription: 'The Environmental Defense Fund creates transformational solutions to climate change and other environmental problems.',
		moderateGroupLink: 'https://www.edf.org/climate'
	},
	school: {
		yesSchoolGroupTitle: 'Moms Clean Air Force Pennsylvania',
		yesSchoolGroupDescription: 'Moms Clean Air Force is a community of moms and dads in Pennsylvania united to protect children from  air pollution including the urgent crisis of climate change.',
		yesSchoolGroupLink: 'https://www.momscleanairforce.org/state-chapters/pennsylvania/',
		noSchoolGroup: 'No school group'
	},
	ethnicity: {
		hispanicGroupTitle: 'Green Latinos',
		hispanicGroupDescription: 'Green Latinos is a coalition of Latino leaders committed to addressing national, regional and local environmental, natural resources and conservations issues that affect the health and welfare of the U.S. Latino community.',
		hispanicGroupLink: 'https://www.greenlatinos.org/climate-and-clean-airhttps://www.greenlatinos.org/climate-and-clean-air',
		africanAmericanGroupTitle: 'POWER',
		africanAmericanGroupDescription: 'Power\'s Climate Justice campaign is building a powerful movement to ensure climate justice, working for racial and cconomic justice on a livable planet.',
		africanAmericanGroupLink: 'https://powerinterfaith.org/campaigns/climate-justice/'
	},
	faith: {
		yesFaithGroupTitle: 'Pennsylvania Interfaith Power & Light',
		yesFaithGroupDescription: 'Interfaith Power and Light works with congregations of all faiths in Pennsylvania to save energy, go green and respond to climate change.',
		yesFaithGroupLink: 'https://paipl.us/home/',
		noFaithGroup: 'No faith group'
	}
}

// Wisconsin
const WI = {
	id: 5,
	state: 'wisconsin',
	stateGroupTitle: 'Citizens\' Climate Lobby - WI City of Milwaukee Chapter',
	stateGroupDescription: 'Citizen\'s Climate Lobby empowers everyday people in Wisconsin to work within their communities and members of Congress on solutions to climate change.',
	stateGroupLink: 'https://community.citizensclimate.org/groups/home/1192',
	ideology: {
		liberalGroupTitle: 'The Climate Reality Project - Milwaukee, WI Chapter',
		liberalGroupDescription: 'The Climate Reality Project is a diverse group of individuals in North Carolina who have come together to solve climate change and build a sustainable future.',
		liberalGroupLink: 'https://www.climaterealityproject.org/chapters-program#wisconsin',
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
		noSchoolGroup: 'No school group'
	},
	ethnicity: {
		hispanicGroupTitle: 'Green Latinos',
		hispanicGroupDescription: 'Green Latinos is a coalition of Latino leaders committed to addressing national, regional and local environmental, natural resources and conservations issues that affect the health and welfare of the U.S. Latino community.',
		hispanicGroupLink: 'https://www.greenlatinos.org/climate-and-clean-airhttps://www.greenlatinos.org/climate-and-clean-air',
		africanAmericanGroupTitle: 'NAACP',
		africanAmericanGroupDescription: 'NAACP\'s Environmental and Justice program works to reduce harmful emissions, particularly greenhouse gases, advances energy efficiency and clean energy and strengthen\'s community resilience and livability.',
		africanAmericanGroupLink: 'https://naacp.org/know-issues/environmental-climate-justice'
	},
	faith: {
		yesFaithGroupTitle: 'Wisconsin Interfaith Power & Light',
		yesFaithGroupDescription: 'Interfaith Power and Light works with congregations of all faiths in Wisconsin to save energy, go green and respond to climate change.',
		yesFaithGroupLink: 'https://wisconsinipl.org',
		noFaithGroup: 'No faith group'
	}
}

// General options
const general = {
	id: 6,
	generalGroupTitle: 'Citizen\'s Climate Lobby',
	generalGroupDescription: 'Citizen\'s Climate Lobby empowers everyday people to work within their communities and members of Congress on solutions to climate change.',
	generalGroupLink: 'https://citizensclimatelobby.org/about-ccl/chapters/',
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
		if(result.state === 'AZ' && result.ideology === 'conservative') {			
			// Pull data from AZ object
			orgOneTitle.innerHTML = AZ.ideology.conservativeGroupTitle;
			orgOneDescription.innerHTML = AZ.ideology.conservativeGroupDescription;
			orgOneLinkText.innerHTML = AZ.ideology.conservativeGroupTitle;
			orgOneLink.href = AZ.ideology.conservativeGroupLink;
		}
		else if(result.state === 'AZ' && result.ideology === 'liberal') {
			orgOneTitle.innerHTML = AZ.ideology.liberalGroupTitle;
			orgOneDescription.innerHTML = AZ.ideology.liberalGroupDescription;
			orgOneLinkText.innerHTML = AZ.ideology.liberalGroupTitle;
			orgOneLink.href = AZ.ideology.liberalGroupLink;
		}
		else if(result.state === 'AZ' && result.ideology === 'moderate') {
			orgOneTitle.innerHTML = AZ.ideology.moderateGroupTitle;
			orgOneDescription.innerHTML = AZ.ideology.moderateGroupDescription;
			orgOneLinkText.innerHTML = AZ.ideology.moderateGroupTitle;
			orgOneLink.href = AZ.ideology.moderateGroupLink;
		}
		
		// Display Org Two - related to school age children
		if(result.state === 'AZ' && result.school === 'yes') {
			orgTwoTitle.innerHTML = AZ.school.yesSchoolGroupTitle;
			orgTwoDescription.innerHTML = AZ.school.yesSchoolGroupDescription;
			orgTwoLinkText.innerHTML = AZ.school.yesSchoolGroupTitle;
			orgTwoLink.href = AZ.school.yesSchoolGroupLink;
		}
		
		// Display Org Three - related to ethnicity
		if(result.state === 'AZ' && result.ethnicity === 'hispanic') {
			orgThreeTitle.innerHTML = AZ.ethnicity.hispanicGroupTitle;
			orgThreeDescription.innerHTML = AZ.ethnicity.hispanicGroupDescription;
			orgThreeLinkText.innerHTML = AZ.ethnicity.hispanicGroupTitle;
			orgThreeLink.href = AZ.ethnicity.hispanicGroupLink;
		}
		else if(result.state === 'AZ' && result.ethnicity === 'african american') {
			orgThreeTitle.innerHTML = AZ.ethnicity.africanAmericanGroupTitle;
			orgThreeDescription.innerHTML = AZ.ethnicity.africanAmericanGroupDescription;
			orgThreeLinkText.innerHTML = AZ.ethnicity.africanAmericanGroupTitle;
			orgThreeLink.href = AZ.ethnicity.africanAmericanGroupLink;
		}
		
		// Display Org Four - related to faith
		if(result.state === 'AZ' && result.faith === 'yes') {
			orgFourTitle.innerHTML = AZ.faith.yesFaithGroupTitle;
			orgFourDescription.innerHTML = AZ.faith.yesFaithGroupDescription;
			orgFourLinkText.innerHTML = AZ.faith.yesFaithGroupTitle;
			orgFourLink.href = AZ.faith.yesFaithGroupLink;
		}
		
		// Display Org Five - related to selected state 
		if(result.state === 'AZ') {
			orgFiveTitle.innerHTML = AZ.stateGroupTitle;
			orgFiveDescription.innerHTML = AZ.stateGroupDescription;
			orgFiveLinkText.innerHTML = AZ.stateGroupTitle;
			orgFiveLink.href = AZ.stateGroupLink;
		}
		
		// Output org results for Georgia
		// Display Org One - related to ideology
		if(result.state === 'GA' && result.ideology === 'conservative') {			
			// Pull data from GA object
			orgOneTitle.innerHTML = GA.ideology.conservativeGroupTitle;
			orgOneDescription.innerHTML = GA.ideology.conservativeGroupDescription;
			orgOneLinkText.innerHTML = GA.ideology.conservativeGroupTitle;
			orgOneLink.href = GA.ideology.conservativeGroupLink;
		}
		else if(result.state === 'GA' && result.ideology === 'liberal') {
			orgOneTitle.innerHTML = GA.ideology.liberalGroupTitle;
			orgOneDescription.innerHTML = GA.ideology.liberalGroupDescription;
			orgOneLinkText.innerHTML = GA.ideology.liberalGroupTitle;
			orgOneLink.href = GA.ideology.liberalGroupLink;
		}
		else if(result.state === 'GA' && result.ideology === 'moderate') {
			orgOneTitle.innerHTML = GA.ideology.moderateGroupTitle;
			orgOneDescription.innerHTML = GA.ideology.moderateGroupDescription;
			orgOneLinkText.innerHTML = GA.ideology.moderateGroupTitle;
			orgOneLink.href = GA.ideology.moderateGroupLink;
		}
		
		// Display Org Two - related to school age children
		if(result.state === 'GA' && result.school === 'yes') {
			orgTwoTitle.innerHTML = GA.school.yesSchoolGroupTitle;
			orgTwoDescription.innerHTML = GA.school.yesSchoolGroupDescription;
			orgTwoLinkText.innerHTML = GA.school.yesSchoolGroupTitle;
			orgTwoLink.href = GA.school.yesSchoolGroupLink;
		}
		
		// Display Org Three - related to ethnicity
		if(result.state === 'GA' && result.ethnicity === 'hispanic') {
			orgThreeTitle.innerHTML = GA.ethnicity.hispanicGroupTitle;
			orgThreeDescription.innerHTML = GA.ethnicity.hispanicGroupDescription;
			orgThreeLinkText.innerHTML = GA.ethnicity.hispanicGroupTitle;
			orgThreeLink.href = GA.ethnicity.hispanicGroupLink;
		}
		else if(result.state === 'GA' && result.ethnicity === 'african american') {
			orgThreeTitle.innerHTML = GA.ethnicity.africanAmericanGroupTitle;
			orgThreeDescription.innerHTML = GA.ethnicity.africanAmericanGroupDescription;
			orgThreeLinkText.innerHTML = GA.ethnicity.africanAmericanGroupTitle;
			orgThreeLink.href = GA.ethnicity.africanAmericanGroupLink;
		}
		
		// Display Org Four - related to faith
		if(result.state === 'GA' && result.faith === 'yes') {
			orgFourTitle.innerHTML = GA.faith.yesFaithGroupTitle;
			orgFourDescription.innerHTML = GA.faith.yesFaithGroupDescription;
			orgFourLinkText.innerHTML = GA.faith.yesFaithGroupTitle;
			orgFourLink.href = GA.faith.yesFaithGroupLink;
		}
		
		// Display Org Five - related to selected state 
		if(result.state === 'GA') {
			orgFiveTitle.innerHTML = GA.stateGroupTitle;
			orgFiveDescription.innerHTML = GA.stateGroupDescription;
			orgFiveLinkText.innerHTML = GA.stateGroupTitle;
			orgFiveLink.href = GA.stateGroupLink;
		}
		
		// Output org results for North Carolina
		// Display Org One - related to ideology
		if(result.state === 'NC' && result.ideology === 'conservative') {			
			// Pull data from NC object
			orgOneTitle.innerHTML = NC.ideology.conservativeGroupTitle;
			orgOneDescription.innerHTML = NC.ideology.conservativeGroupDescription;
			orgOneLinkText.innerHTML = NC.ideology.conservativeGroupTitle;
			orgOneLink.href = NC.ideology.conservativeGroupLink;
		}
		else if(result.state === 'NC' && result.ideology === 'liberal') {
			orgOneTitle.innerHTML = NC.ideology.liberalGroupTitle;
			orgOneDescription.innerHTML = NC.ideology.liberalGroupDescription;
			orgOneLinkText.innerHTML = NC.ideology.liberalGroupTitle;
			orgOneLink.href = NC.ideology.liberalGroupLink;
		}
		else if(result.state === 'NC' && result.ideology === 'moderate') {
			orgOneTitle.innerHTML = NC.ideology.moderateGroupTitle;
			orgOneDescription.innerHTML = NC.ideology.moderateGroupDescription;
			orgOneLinkText.innerHTML = NC.ideology.moderateGroupTitle;
			orgOneLink.href = NC.ideology.moderateGroupLink;
		}
		
		// Display Org Two - related to school age children
		if(result.state === 'NC' && result.school === 'yes') {
			orgTwoTitle.innerHTML = NC.school.yesSchoolGroupTitle;
			orgTwoDescription.innerHTML = NC.school.yesSchoolGroupDescription;
			orgTwoLinkText.innerHTML = NC.school.yesSchoolGroupTitle;
			orgTwoLink.href = NC.school.yesSchoolGroupLink;
		}
		
		// Display Org Three - related to ethnicity
		if(result.state === 'NC' && result.ethnicity === 'hispanic') {
			orgThreeTitle.innerHTML = NC.ethnicity.hispanicGroupTitle;
			orgThreeDescription.innerHTML = NC.ethnicity.hispanicGroupDescription;
			orgThreeLinkText.innerHTML = NC.ethnicity.hispanicGroupTitle;
			orgThreeLink.href = NC.ethnicity.hispanicGroupLink;
		}
		else if(result.state === 'NC' && result.ethnicity === 'african american') {
			orgThreeTitle.innerHTML = NC.ethnicity.africanAmericanGroupTitle;
			orgThreeDescription.innerHTML = NC.ethnicity.africanAmericanGroupDescription;
			orgThreeLinkText.innerHTML = NC.ethnicity.africanAmericanGroupTitle;
			orgThreeLink.href = NC.ethnicity.africanAmericanGroupLink;
		}
		
		// Display Org Four - related to faith
		if(result.state === 'NC' && result.faith === 'yes') {
			orgFourTitle.innerHTML = NC.faith.yesFaithGroupTitle;
			orgFourDescription.innerHTML = NC.faith.yesFaithGroupDescription;
			orgFourLinkText.innerHTML = NC.faith.yesFaithGroupTitle;
			orgFourLink.href = NC.faith.yesFaithGroupLink;
		}
		
		// Display Org Five - related to selected state 
		if(result.state === 'NC') {
			orgFiveTitle.innerHTML = NC.stateGroupTitle;
			orgFiveDescription.innerHTML = NC.stateGroupDescription;
			orgFiveLinkText.innerHTML = NC.stateGroupTitle;
			orgFiveLink.href = NC.stateGroupLink;
		}
		
		// Output org results for Pennsylvania
		// Display Org One - related to ideology
		if(result.state === 'PA' && result.ideology === 'conservative') {			
			// Pull data from PA object
			orgOneTitle.innerHTML = PA.ideology.conservativeGroupTitle;
			orgOneDescription.innerHTML = PA.ideology.conservativeGroupDescription;
			orgOneLinkText.innerHTML = PA.ideology.conservativeGroupTitle;
			orgOneLink.href = PA.ideology.conservativeGroupLink;
		}
		else if(result.state === 'PA' && result.ideology === 'liberal') {
			orgOneTitle.innerHTML = PA.ideology.liberalGroupTitle;
			orgOneDescription.innerHTML = PA.ideology.liberalGroupDescription;
			orgOneLinkText.innerHTML = PA.ideology.liberalGroupTitle;
			orgOneLink.href = PA.ideology.liberalGroupLink;
		}
		else if(result.state === 'PA' && result.ideology === 'moderate') {
			orgOneTitle.innerHTML = PA.ideology.moderateGroupTitle;
			orgOneDescription.innerHTML = PA.ideology.moderateGroupDescription;
			orgOneLinkText.innerHTML = PA.ideology.moderateGroupTitle;
			orgOneLink.href = PA.ideology.moderateGroupLink;
		}
		
		// Display Org Two - related to school age children
		if(result.state === 'PA' && result.school === 'yes') {
			orgTwoTitle.innerHTML = PA.school.yesSchoolGroupTitle;
			orgTwoDescription.innerHTML = PA.school.yesSchoolGroupDescription;
			orgTwoLinkText.innerHTML = PA.school.yesSchoolGroupTitle;
			orgTwoLink.href = PA.school.yesSchoolGroupLink;
		}
		
		// Display Org Three - related to ethnicity
		if(result.state === 'PA' && result.ethnicity === 'hispanic') {
			orgThreeTitle.innerHTML = PA.ethnicity.hispanicGroupTitle;
			orgThreeDescription.innerHTML = PA.ethnicity.hispanicGroupDescription;
			orgThreeLinkText.innerHTML = PA.ethnicity.hispanicGroupTitle;
			orgThreeLink.href = PA.ethnicity.hispanicGroupLink;
		}
		else if(result.state === 'PA' && result.ethnicity === 'african american') {
			orgThreeTitle.innerHTML = PA.ethnicity.africanAmericanGroupTitle;
			orgThreeDescription.innerHTML = PA.ethnicity.africanAmericanGroupDescription;
			orgThreeLinkText.innerHTML = PA.ethnicity.africanAmericanGroupTitle;
			orgThreeLink.href = PA.ethnicity.africanAmericanGroupLink;
		}
		
		// Display Org Four - related to faith
		if(result.state === 'PA' && result.faith === 'yes') {
			orgFourTitle.innerHTML = PA.faith.yesFaithGroupTitle;
			orgFourDescription.innerHTML = PA.faith.yesFaithGroupDescription;
			orgFourLinkText.innerHTML = PA.faith.yesFaithGroupTitle;
			orgFourLink.href = PA.faith.yesFaithGroupLink;
		}
		
		// Display Org Five - related to selected state 
		if(result.state === 'PA') {
			orgFiveTitle.innerHTML = PA.stateGroupTitle;
			orgFiveDescription.innerHTML = PA.stateGroupDescription;
			orgFiveLinkText.innerHTML = PA.stateGroupTitle;
			orgFiveLink.href = PA.stateGroupLink;
		}
		
		// Output org results for Wisconsin
		// Display Org One - related to ideology
		if(result.state === 'WI' && result.ideology === 'conservative') {			
			// Pull data from WI object
			orgOneTitle.innerHTML = WI.ideology.conservativeGroupTitle;
			orgOneDescription.innerHTML = WI.ideology.conservativeGroupDescription;
			orgOneLinkText.innerHTML = WI.ideology.conservativeGroupTitle;
			orgOneLink.href = WI.ideology.conservativeGroupLink;
		}
		else if(result.state === 'WI' && result.ideology === 'liberal') {
			orgOneTitle.innerHTML = WI.ideology.liberalGroupTitle;
			orgOneDescription.innerHTML = WI.ideology.liberalGroupDescription;
			orgOneLinkText.innerHTML = WI.ideology.liberalGroupTitle;
			orgOneLink.href = WI.ideology.liberalGroupLink;
		}
		else if(result.state === 'WI' && result.ideology === 'moderate') {
			orgOneTitle.innerHTML = WI.ideology.moderateGroupTitle;
			orgOneDescription.innerHTML = WI.ideology.moderateGroupDescription;
			orgOneLinkText.innerHTML = WI.ideology.moderateGroupTitle;
			orgOneLink.href = WI.ideology.moderateGroupLink;
		}
		
		// Display Org Two - related to school age children
		if(result.state === 'WI' && result.school === 'yes') {
			orgTwoTitle.innerHTML = WI.school.yesSchoolGroupTitle;
			orgTwoDescription.innerHTML = WI.school.yesSchoolGroupDescription;
			orgTwoLinkText.innerHTML = WI.school.yesSchoolGroupTitle;
			orgTwoLink.href = WI.school.yesSchoolGroupLink;
		}
		
		// Display Org Three - related to ethnicity
		if(result.state === 'WI' && result.ethnicity === 'hispanic') {
			orgThreeTitle.innerHTML = WI.ethnicity.hispanicGroupTitle;
			orgThreeDescription.innerHTML = WI.ethnicity.hispanicGroupDescription;
			orgThreeLinkText.innerHTML = WI.ethnicity.hispanicGroupTitle;
			orgThreeLink.href = WI.ethnicity.hispanicGroupLink;
		}
		else if(result.state === 'WI' && result.ethnicity === 'african american') {
			orgThreeTitle.innerHTML = WI.ethnicity.africanAmericanGroupTitle;
			orgThreeDescription.innerHTML = WI.ethnicity.africanAmericanGroupDescription;
			orgThreeLinkText.innerHTML = WI.ethnicity.africanAmericanGroupTitle;
			orgThreeLink.href = WI.ethnicity.africanAmericanGroupLink;
		}
		
		// Display Org Four - related to faith
		if(result.state === 'WI' && result.faith === 'yes') {
			orgFourTitle.innerHTML = WI.faith.yesFaithGroupTitle;
			orgFourDescription.innerHTML = WI.faith.yesFaithGroupDescription;
			orgFourLinkText.innerHTML = WI.faith.yesFaithGroupTitle;
			orgFourLink.href = WI.faith.yesFaithGroupLink;
		}
		
		// Display Org Five - related to selected state 
		if(result.state === 'WI') {
			orgFiveTitle.innerHTML = WI.stateGroupTitle;
			orgFiveDescription.innerHTML = WI.stateGroupDescription;
			orgFiveLinkText.innerHTML = WI.stateGroupTitle;
			orgFiveLink.href = WI.stateGroupLink;
		}
		
	}
});
