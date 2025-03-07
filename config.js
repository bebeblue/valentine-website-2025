// ============================================
//💫 Nobody Get's Me, You Do 💫
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Mannan",

    // The title that appears in the browser tab
    // You can use emojis! 💋🧸🤍🏹🐾
    pageTitle: "Be Mine <3"

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatinEmojis: {
        hearts: ['☯️', '💖', '💝', '💘', '💌'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "Maybe",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next 💕"                                         // Text for the next button
        },
        third: {
            text: "As SZA once said, 'Nobody  Get's Me, You Do, so... Will You Be Mine?' 💋", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "YES!!!"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? AS YOU SHOULD TBH",  // Shows when they go past 5000%
        high: "Ohhh lil ol' me 🙈",              // Shows when they go past 1000%
        normal: "I love you 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Damn right it's a 'yes'",
        message: "Now come get your gift (ME), with cuddles and kisses 😘😘",
        emojis: "🤍💌🍓🌷🌙🍰"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#FFEDFA",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#E195AB",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#DE3163",     // Button color (should stand out against the background)
        buttonHover: "#CCDF92",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#FFFECB"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "17s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "46px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.7         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://www.youtube.com/watch?v=Oxf8ULSB8yU", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
