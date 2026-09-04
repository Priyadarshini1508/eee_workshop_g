/* =========================================================
   AWS × EEE WORKSHOP
   Interactive JavaScript
========================================================= */


/* =========================================================
   MODULE NAVIGATION
========================================================= */

const modules = document.querySelectorAll(".module");
const navItems = document.querySelectorAll(".nav-item");

const progressFill =
    document.getElementById("progressFill");

const progressText =
    document.getElementById("progressText");

const currentModuleName =
    document.getElementById("currentModuleName");


const moduleNames = [
    "Cloud Fundamentals",
    "AWS × EEE Applications",
    "IoT Core + MQTT",
    "Amazon SQS",
    "AWS Lambda",
    "Amazon S3",
    "Amazon SNS",
    "CloudWatch",
    "Amazon EC2",
    "System Integration",
    "EEE Capstone"
];


let currentModule = 0;


function showModule(index) {

    if (index < 0) {
        index = 0;
    }

    if (index >= modules.length) {
        index = modules.length - 1;
    }

    currentModule = index;


    modules.forEach((module, i) => {

        module.classList.toggle(
            "active-module",
            i === index
        );

    });


    navItems.forEach((item, i) => {

        item.classList.toggle(
            "active",
            i === index
        );

    });


    currentModuleName.textContent =
        moduleNames[index];


    progressText.textContent =
        `${index + 1} / ${modules.length}`;


    const percentage =
        ((index + 1) / modules.length) * 100;


    progressFill.style.width =
        `${percentage}%`;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    const sidebar =
        document.getElementById("sidebar");

    sidebar.classList.remove(
        "mobile-open"
    );
}


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        const index =
            Number(item.dataset.module);

        showModule(index);

    });

});


document
    .querySelectorAll(".next-module")
    .forEach((button) => {

        button.addEventListener("click", () => {

            showModule(currentModule + 1);

        });

    });



/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const sidebar =
    document.getElementById("sidebar");


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "mobile-open"
            );

        }
    );

}



/* =========================================================
   QUIZ SYSTEM
========================================================= */

document
    .querySelectorAll(".quiz-card")
    .forEach((quiz) => {

        const options =
            quiz.querySelectorAll(".quiz-option");

        const result =
            quiz.querySelector(".quiz-result");


        options.forEach((option) => {

            option.addEventListener(
                "click",
                () => {

                    options.forEach((item) => {

                        item.classList.remove(
                            "correct",
                            "wrong"
                        );

                    });


                    const isCorrect =
                        option.dataset.answer ===
                        "correct";


                    if (isCorrect) {

                        option.classList.add(
                            "correct"
                        );

                        result.textContent =
                            "✓ Correct! Good engineering thinking.";

                        result.style.color =
                            "#16805c";

                    } else {

                        option.classList.add(
                            "wrong"
                        );

                        result.textContent =
                            "✕ Not quite. Read the explanation and try again.";

                        result.style.color =
                            "#c63e3e";

                    }

                }
            );

        });

    });



/* =========================================================
   COPY BUTTONS
========================================================= */

document
    .querySelectorAll(".copy-btn")
    .forEach((button) => {

        button.addEventListener(
            "click",
            async () => {

                const code =
                    button
                        .parentElement
                        .querySelector("code");

                if (!code) {
                    return;
                }


                const text =
                    code.textContent.trim();


                try {

                    await navigator.clipboard.writeText(
                        text
                    );

                    const original =
                        button.textContent;

                    button.textContent =
                        "Copied ✓";

                    setTimeout(() => {

                        button.textContent =
                            original;

                    }, 1200);

                } catch (error) {

                    button.textContent =
                        "Copy failed";

                }

            }
        );

    });



/* =========================================================
   IMAGE MODAL
========================================================= */

const imageModal =
    document.getElementById("imageModal");

const largeImage =
    document.getElementById("largeImage");

const closeImage =
    document.getElementById("closeImage");


document
    .querySelectorAll(".reference-image img")
    .forEach((image) => {

        image.addEventListener(
            "click",
            () => {

                largeImage.src =
                    image.src;

                imageModal.classList.add(
                    "open"
                );

            }
        );

    });


if (closeImage) {

    closeImage.addEventListener(
        "click",
        () => {

            imageModal.classList.remove(
                "open"
            );

        }
    );

}


if (imageModal) {

    imageModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === imageModal
            ) {

                imageModal.classList.remove(
                    "open"
                );

            }

        }
    );

}



/* =========================================================
   SEARCH
========================================================= */

const searchBtn =
    document.getElementById("searchBtn");

const searchModal =
    document.getElementById("searchModal");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


const searchableContent = [
    {
        title: "Cloud Fundamentals",
        module: 0,
        keywords:
            "cloud aws computing region console account"
    },

    {
        title: "AWS × EEE Applications",
        module: 1,
        keywords:
            "eee electrical engineering smart energy transformer ev battery solar motor"
    },

    {
        title: "AWS IoT Core + MQTT",
        module: 2,
        keywords:
            "iot mqtt thing certificate policy device sensor topic publish subscribe"
    },

    {
        title: "Amazon SQS",
        module: 3,
        keywords:
            "sqs queue message buffer producer consumer decouple"
    },

    {
        title: "AWS Lambda",
        module: 4,
        keywords:
            "lambda serverless function processing event calculation voltage current"
    },

    {
        title: "Amazon S3",
        module: 5,
        keywords:
            "s3 storage bucket object file telemetry archive"
    },

    {
        title: "Amazon SNS",
        module: 6,
        keywords:
            "sns notification topic subscriber alert email sms"
    },

    {
        title: "CloudWatch",
        module: 7,
        keywords:
            "cloudwatch monitoring metrics logs alarms dashboard"
    },

    {
        title: "Amazon EC2",
        module: 8,
        keywords:
            "ec2 server virtual machine ami instance operating system"
    },

    {
        title: "Complete System Integration",
        module: 9,
        keywords:
            "architecture integration iot sqs lambda s3 sns cloudwatch"
    },

    {
        title: "EEE Capstone",
        module: 10,
        keywords:
            "capstone project transformer energy ev solar smart building sensors"
    }
];


function performSearch(query) {

    const cleanQuery =
        query
            .toLowerCase()
            .trim();


    searchResults.innerHTML = "";


    if (!cleanQuery) {

        searchResults.innerHTML =
            `<p style="margin-top:15px;color:#69798c;font-size:12px;">
                Type something to search the workbook.
            </p>`;

        return;
    }


    const matches =
        searchableContent.filter(
            (item) => {

                return (
                    item.title
                        .toLowerCase()
                        .includes(cleanQuery)

                    ||

                    item.keywords
                        .includes(cleanQuery)
                );

            }
        );


    if (matches.length === 0) {

        searchResults.innerHTML =
            `<p style="margin-top:15px;color:#69798c;font-size:12px;">
                No matching module found.
            </p>`;

        return;
    }


    matches.forEach((match) => {

        const div =
            document.createElement("div");

        div.className =
            "search-result";


        div.innerHTML = `
            <strong>${match.title}</strong>
            <small>
                Module ${match.module + 1}
            </small>
        `;


        div.addEventListener(
            "click",
            () => {

                showModule(
                    match.module
                );

                searchModal.classList.remove(
                    "open"
                );

                searchInput.value = "";

            }
        );


        searchResults.appendChild(div);

    });

}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        () => {

            searchModal.classList.add(
                "open"
            );

            setTimeout(() => {

                searchInput.focus();

            }, 100);

        }
    );

}


if (closeSearch) {

    closeSearch.addEventListener(
        "click",
        () => {

            searchModal.classList.remove(
                "open"
            );

        }
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            performSearch(
                searchInput.value
            );

        }
    );

}


if (searchModal) {

    searchModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === searchModal
            ) {

                searchModal.classList.remove(
                    "open"
                );

            }

        }
    );

}



/* =========================================================
   CAPSTONE BUILDER
========================================================= */

const selectedOptions = {

    problem: null,

    sensor: [],

    processing: null,

    storage: null,

    alert: null

};


document
    .querySelectorAll(".choice-grid")
    .forEach((grid) => {

        const group =
            grid.dataset.group;


        const cards =
            grid.querySelectorAll(
                ".choice-card"
            );


        cards.forEach((card) => {

            card.addEventListener(
                "click",
                () => {

                    const value =
                        card.dataset.value;


                    /*
                     * Sensors allow multiple selections.
                     */

                    if (group === "sensor") {

                        card.classList.toggle(
                            "selected"
                        );


                        if (
                            selectedOptions.sensor
                                .includes(value)
                        ) {

                            selectedOptions.sensor =
                                selectedOptions.sensor
                                    .filter(
                                        item =>
                                            item !== value
                                    );

                        } else {

                            selectedOptions.sensor
                                .push(value);

                        }

                        return;
                    }


                    /*
                     * Other groups allow one selection.
                     */

                    cards.forEach(
                        (item) => {

                            item.classList.remove(
                                "selected"
                            );

                        }
                    );


                    card.classList.add(
                        "selected"
                    );


                    selectedOptions[group] =
                        value;

                }
            );

        });

    });



/* =========================================================
   CAPSTONE GENERATOR
========================================================= */

const generateBtn =
    document.getElementById(
        "generateBtn"
    );

const solutionOutput =
    document.getElementById(
        "solutionOutput"
    );


function generateSolution() {

    if (
        !selectedOptions.problem
    ) {

        alert(
            "Please select an engineering problem first."
        );

        return;
    }


    if (
        selectedOptions.sensor.length === 0
    ) {

        alert(
            "Please select at least one sensor/telemetry value."
        );

        return;
    }


    if (
        !selectedOptions.processing
    ) {

        alert(
            "Please select a processing service."
        );

        return;
    }


    if (
        !selectedOptions.storage
    ) {

        alert(
            "Please select a storage service."
        );

        return;
    }


    if (
        !selectedOptions.alert
    ) {

        alert(
            "Please select an alert service."
        );

        return;
    }


    const sensors =
        selectedOptions.sensor
            .join(", ");


    solutionOutput.innerHTML = `

        <div class="generated-flow">

            <div class="generated-node">
                <strong>⚡ EEE DEVICE</strong>
                <small>
                    ${selectedOptions.problem}
                </small>
            </div>

            <div class="generated-arrow">
                →
            </div>

            <div class="generated-node">
                <strong>📡 MQTT</strong>
                <small>
                    Telemetry
                </small>
            </div>

            <div class="generated-arrow">
                →
            </div>

            <div class="generated-node">
                <strong>☁️ AWS IoT Core</strong>
                <small>
                    Device gateway
                </small>
            </div>

            <div class="generated-arrow">
                →
            </div>

            <div class="generated-node">
                <strong>📨 SQS</strong>
                <small>
                    Message buffer
                </small>
            </div>

            <div class="generated-arrow">
                →
            </div>

            <div class="generated-node">
                <strong>
                    ⚙️ ${selectedOptions.processing}
                </strong>

                <small>
                    Process telemetry
                </small>
            </div>

        </div>


        <div class="generated-flow"
             style="margin-top:12px;">

            <div class="generated-node">

                <strong>
                    📊 TELEMETRY
                </strong>

                <small>
                    ${sensors}
                </small>

            </div>

            <div class="generated-arrow">
                →
            </div>

            <div class="generated-node">

                <strong>
                    🗄️ ${selectedOptions.storage}
                </strong>

                <small>
                    Store data
                </small>

            </div>

            <div class="generated-arrow">
                →
            </div>

            <div class="generated-node">

                <strong>
                    🔔 ${selectedOptions.alert}
                </strong>

                <small>
                    Alert engineer
                </small>

            </div>

        </div>


        <div class="generated-explanation">

            <strong>Solution Explanation</strong>

            <br><br>

            Your system addresses
            <strong>${selectedOptions.problem}</strong>.

            The engineering device collects
            <strong>${sensors}</strong>.

            The device publishes telemetry using MQTT
            to AWS IoT Core.

            An IoT Rule can route the telemetry into SQS,
            where messages can be buffered before processing.

            <strong>
                ${selectedOptions.processing}
            </strong>
            performs the processing.

            Processed data can be stored using
            <strong>${selectedOptions.storage}</strong>.

            Important engineering events can be sent through
            <strong>${selectedOptions.alert}</strong>
            to notify the appropriate user.

        </div>
    `;

}


if (generateBtn) {

    generateBtn.addEventListener(
        "click",
        generateSolution
    );

}



/* =========================================================
   FINAL QUESTIONS
========================================================= */

document
    .querySelectorAll(".final-question")
    .forEach((question) => {

        const answers =
            question.querySelectorAll(
                ".final-answer"
            );


        answers.forEach((answer) => {

            answer.addEventListener(
                "click",
                () => {

                    answers.forEach(
                        (item) => {

                            item.classList.remove(
                                "correct",
                                "incorrect"
                            );

                        }
                    );


                    if (
                        answer.dataset.correct ===
                        "true"
                    ) {

                        answer.classList.add(
                            "correct"
                        );

                    } else {

                        answer.classList.add(
                            "incorrect"
                        );

                    }

                }
            );

        });

    });



/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
         * Ctrl + K opens search
         */

        if (
            event.ctrlKey &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            searchModal.classList.add(
                "open"
            );

            searchInput.focus();

        }


        /*
         * Escape closes overlays
         */

        if (
            event.key === "Escape"
        ) {

            searchModal.classList.remove(
                "open"
            );

            imageModal.classList.remove(
                "open"
            );

        }

    }
);



/* =========================================================
   LIGHTBOX MODAL & MOBILE OVERLAY LOGIC
========================================================= */

// Create Lightbox DOM dynamically if missing
let lightboxModal = document.querySelector('.lightbox-modal');
if (!lightboxModal) {
    lightboxModal = document.createElement('div');
    lightboxModal.className = 'lightbox-modal';
    lightboxModal.innerHTML = `
        <button class="lightbox-close" aria-label="Close image modal">&times;</button>
        <img class="lightbox-content" src="" alt="AWS Console Screenshot Zoomed">
        <div class="lightbox-caption"></div>
    `;
    document.body.appendChild(lightboxModal);
}

const lightboxImg = lightboxModal.querySelector('.lightbox-content');
const lightboxCaption = lightboxModal.querySelector('.lightbox-caption');
const lightboxClose = lightboxModal.querySelector('.lightbox-close');

function openLightbox(src, captionText) {
    lightboxImg.src = src;
    lightboxCaption.textContent = captionText || 'AWS Console Reference Screen';
    lightboxModal.classList.add('active');
}

lightboxClose.addEventListener('click', () => {
    lightboxModal.classList.remove('active');
});

lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
    }
});

// Delegate click on console images
document.addEventListener('click', (e) => {
    const wrapper = e.target.closest('.console-image-wrapper');
    const zoomBtn = e.target.closest('.image-zoom-btn');
    
    if (wrapper || zoomBtn) {
        const card = e.target.closest('.console-image-card');
        const img = card ? card.querySelector('img') : null;
        const caption = card ? card.querySelector('.image-caption') : null;
        
        if (img) {
            openLightbox(img.src, caption ? caption.textContent : img.alt);
        }
    }
});

// Mobile Backdrop Overlay
let sidebarOverlay = document.querySelector('.sidebar-overlay');
if (!sidebarOverlay) {
    sidebarOverlay = document.createElement('div');
    sidebarOverlay.className = 'sidebar-overlay';
    document.body.appendChild(sidebarOverlay);
}

const mainSidebar = document.getElementById('sidebar');
const mobileMenuBtn = document.getElementById('menuBtn');

if (mobileMenuBtn && mainSidebar) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mainSidebar.classList.toggle('open');
        mainSidebar.classList.toggle('mobile-open');
        sidebarOverlay.classList.toggle('active');
    });

    sidebarOverlay.addEventListener('click', () => {
        mainSidebar.classList.remove('open', 'mobile-open');
        sidebarOverlay.classList.remove('active');
    });
}

// Auto close mobile menu on module select
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (mainSidebar) {
            mainSidebar.classList.remove('open', 'mobile-open');
        }
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('active');
        }
    });
});

/* =========================================================
   STEP COMPLETION TRACKER & CHECKBOXES
========================================================= */

function initStepTracker() {
    const steps = document.querySelectorAll('.step');
    const savedState = JSON.parse(localStorage.getItem('aws_eee_steps_progress') || '{}');

    steps.forEach((step, index) => {
        // Prevent duplicate injection
        if (step.querySelector('.step-checkbox-wrapper')) return;

        const stepId = step.id || `step-mod-${currentModule}-${index}`;
        step.id = stepId;

        const isCompleted = savedState[stepId] || false;
        if (isCompleted) {
            step.classList.add('completed');
        }

        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.className = 'step-checkbox-wrapper';
        checkboxWrapper.innerHTML = `
            <input type="checkbox" id="chk-${stepId}" class="step-checkbox" ${isCompleted ? 'checked' : ''}>
            <label for="chk-${stepId}" class="step-checkbox-label">
                ${isCompleted ? '✓ Step Completed' : 'Mark step as completed'}
            </label>
        `;

        const stepContent = step.querySelector('.step-content') || step;
        stepContent.appendChild(checkboxWrapper);

        const checkbox = checkboxWrapper.querySelector('input');
        const label = checkboxWrapper.querySelector('label');

        checkbox.addEventListener('change', (e) => {
            const checked = e.target.checked;
            step.classList.toggle('completed', checked);
            label.textContent = checked ? '✓ Step Completed' : 'Mark step as completed';
            
            const currentSaved = JSON.parse(localStorage.getItem('aws_eee_steps_progress') || '{}');
            currentSaved[stepId] = checked;
            localStorage.setItem('aws_eee_steps_progress', JSON.stringify(currentSaved));
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initStepTracker();
});

// Re-init step checkboxes when module switches
const origShowModule = showModule;
showModule = function(index) {
    origShowModule(index);
    setTimeout(initStepTracker, 50);
};


/* =========================================================
   INITIALIZE
========================================================= */

showModule(0);