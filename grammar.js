var myGrammar = {
    "origin": [
        // Rule is duplicated to increase likelihood of generation.
        "#excerpt#",
        "#excerpt#",
        "#excerpt#",
        "#excerpt#",
        "#excerpt#",
        "#excerpt#",

        //  SINGLE FRAGMENT SENTENCES 
        "#statement.capitalizeFirst#.",
        "#question.capitalizeFirst#?",
        "#observation_stmt.capitalizeFirst#",
        "#observation_q.capitalizeFirst#",

        //  TWO-FRAGMENT SENTENCES (PERIOD SEPARATED) 
        "#statement.capitalizeFirst#. #conjunction.capitalizeFirst# #statement#.",
        "#statement.capitalizeFirst#. #observation_stmt.capitalizeFirst#",
        "#question.capitalizeFirst#? #observation_stmt.capitalizeFirst#",
        "#statement.capitalizeFirst#. However, #observation_q#",
        "#observation_stmt.capitalizeFirst# #conjunction.capitalizeFirst# #statement#.",

        //  TWO-FRAGMENT SENTENCES (COMMA SEPARATED) 
        "#statement.capitalizeFirst#, #conjunction# #statement#.",
        "#statement.capitalizeFirst#, which is #adjective#.",
        "#statement.capitalizeFirst#, but #observation_q_noPunc#?",
        "Because #statement#, the #noun# is #adjective#.",

        //  THREE-FRAGMENT SENTENCES 
        "#statement.capitalizeFirst#. #conjunction.capitalizeFirst# #statement#. #conjunction.capitalizeFirst# #statement#.",
        "#question.capitalizeFirst#? #statement.capitalizeFirst#, #conjunction# #statement#.",
        "#statement.capitalizeFirst#, #conjunction# #statement#, #conjunction# #observation_stmt_noPunc#.",
        "#observation_stmt.capitalizeFirst# #conjunction.capitalizeFirst# #statement#, but what if the #noun# could #verb#?",

        //  LONGER & MORE COMPLEX STRUCTURES 
        "#statement.capitalizeFirst#. #statement.capitalizeFirst#. #question.capitalizeFirst#?",
        "#question.capitalizeFirst#? It's because #statement#, #conjunction# #statement#.",

        //  STRUCTURES WITH ELLIPSES 
        "#statement.capitalizeFirst#...",
        "#statement.capitalizeFirst#... #conjunction# #statement#.",
        "#statement.capitalizeFirst#, but...",
        "#question.capitalizeFirst#? I mean... #observation_stmt#",
        "I think the #noun# is... #adjective#.",
        "What if... #question#?"
    ],

    //  SENTENCE FRAGMENTS 

    "excerpt": [
        "I have heard it said that #noun.s# have #adjective# #noun.s#. All #noun.s# have #noun.s#. There are some, too, who are #adjective#.", // (qtd. in Bleuler, 1982, p. 579)
        "Well, I wonder if that part of it can't be - I wonder if that doesn't - let me put it frankly; I wonder if that doesn't have to be #verb.ed#? Let me put it this way: let us suppose you get the #noun#, and you get the #adjective# way to #verb# it. You could #verb# that #noun#?", // (qtd. in Bleuler, 1982, p. 579)
        "#noun.a# #verb.s#. You call it #noun.a#. You #verb# it. You #verb# it in a can. You #verb# the can. You #verb# at it in this #noun#. #noun# #noun#.", //  (qtd. in Covington et al., 2005, p. 94)
        "If we need #noun# when you can #verb# into #noun.a#, and then when you #verb#, the best thing is to get #noun.a#.", //  (qtd. in Covington et al., 2005, p. 91)
        "Oh, it was #adjective# you know, the #noun.s# broke, and the #noun# fell in the front doorway.", //  (Oh et al., p. 235)
        "Thought for the day — The #noun# with #adverb# that of #noun.a# #verb# #adjective# which #verb.s# #noun# to #verb# the #noun# #verb# by the #adjective# #noun# #verb# one's #verb# must #verb# #verb# #adverb# to one's #adjective# #noun# to #verb# #verb.a# #noun# for #noun# of #adverb# #verb# #adjective# to another." // (Bleuler, 1982, p. 601)



    ],

    // Simple statements
    "statement": [
        "the #noun# #verb.s# #adverb#",
        "they talked about the #noun#",
        "the #noun# situation is #adjective#",
        "#noun.a# is #noun.a#",
        "I do not understand the #neologism#",
        "I used to be #adjective#",
        "I remember when I was #adjective#",
        "we should #verb# the #noun.s#",
        "I heard a story about #noun.a#",
        "the #noun# is too #adjective#",
        "it connects to the #neologism#",
        "a thought #verb.s# in my head",
        "that #noun# #verb.s# #adverb#",
        "the #noun# and the #noun# #verb.s# together",
        "the #noun# #verb.s# when I #verb#",
        "the #noun# seems #adjective#",
        "the world is full of #adjective# #noun.s#",
        "#noun.a# can change everything",
        "people often #verb# #adverb#",
        "we found the #noun# near the #noun#",
        "I #verb.ed# once. It was #adjective#",
        "I think about the #noun# sometimes",
        "a kind of #noun#",
        // Plural versions for better agreement
        "the #noun.s# are #adjective#",
        "some #noun.s# #verb# #adverb#",
        "those #noun.s# seem #adjective#",
        "many #noun.s# #verb# #adverb#",
        "all #noun.s# are #adjective#",
        "the #noun.s# #verb# #adverb#",
        "the #noun.s# #verb# when I #verb#",
        "everything #verb.s# around the #noun#",
        "#neologism.a# is #adjective#",
        "the #neologism# seems #adjective#",
        "people often #verb# with #neologism#",
        "we found #neologism.a# near the #noun#"
    ],
    // Simple questions
    "question": [
        "can #noun.a# #verb# #noun.a#",
        "is the #noun# #adjective#",
        "are #noun.s# always #adjective#",
        "why does the #noun# #verb# so #adverb#",
        "what makes #noun.a# #adjective#",
        "isn't the #noun# #adjective#",
        "are #noun.s# #adjective#",
        "why are you #adjective#",
        "why am I #adjective#",
        "have you ever #verb.ed# #noun.a#",
        "will I #verb#",
        "do you know about the #neologism#",
        "have you considered the #noun#",
        "could it be #noun.a#",
        "what if the #noun# could #verb#",
        "how does the #noun# #verb#",
        "are you a #neologism#",
        "are you #adjective#",
        "am I #adjective#",
        "how does the #noun# #verb#"
    ],

    // Short observations or follow-ups
    // Observations split into statements vs questions
    "observation_stmt": [
        "that seems #adjective#.",
        "it feels #adverb# #adjective#.",
        "what #adjective.a# #noun#.",
        "it's just a matter of #noun#.",
        "it #verb.s# when you #verb#.",
        "that has to be the #adjective.superlative# one.",
        "I heard it was #adjective#.",
        "#noun.a# inside #noun.a#.",
        "it will never #verb#.",
        "it could be #noun.a#.",
        "that's #adjective.a# way to #verb#.",
        "because the #noun# is #adjective#.",
        "I wish it were more #adjective#.",
        "it used to #verb#.",
        "you should #verb# it #adverb#.",
        "it's neither #adjective# nor #adjective#.",
        "everyone knows it's #adjective#.",
        "it might #verb# later.",
        "it is #adjective#.",
        "someone #verb.ed#.",
        "that is not #adjective#.",
        "that’s why it #verb.s# so #adverb#.",
        "it must #verb# so #adverb#.",
        "maybe I will also #verb#.",
        "it could be #noun.a#.",
        "it might #verb# later."
    ],
    "observation_q": [
        "why is it so #adjective#?",
        "don't you think it's #adjective#?",
        "how can it #verb# so #adverb#?",
        "is this the #noun#?",
        "isn't that #adjective#?",
        "have you thought about the #noun#?",
        "what if the #noun# could #verb#?",
        "how does the #noun# #verb#?",
        "what if the #noun# could #verb#?",
        "could it be #noun.a#?",
        
    ],

    // Punctuation-less versions for use in comma-separated lists
    "observation_stmt_noPunc": [
        "that seems #adjective#",
        "it feels #adverb# #adjective#",
        "what #adjective.a# #noun#",
        "it's just a matter of #noun#",
        "it #verb.s# when you #verb#",
        "that has to be the #adjective.superlative# one",
        "I heard it was #adjective#",
        "it will never #verb#",
        "it could be #noun.a#",
        "that's #adjective.a# way to #verb#",
        "because the #noun# is #adjective#",
        "I wish it were more #adjective#",
        "it used to #verb#",
        "you should #verb# it #adverb#",
        "it's neither #adjective# nor #adjective#",
        "everyone knows it's #adjective#",
        "it might #verb# later",
        "it is #adjective#",
        "someone #verb.ed#",
        "that is not #adjective#",
        "that’s why it #verb.s# so #adverb#",
        "it must #verb# so #adverb#",
        "maybe I will also #verb#"
    ],
    "observation_q_noPunc": [
        "why is it so #adjective#",
        "don't you think it's #adjective#",
        "how can it #verb# so #adverb#",
        "is this the #noun#",
        "isn't that #adjective#",
        "have you thought about the #noun#",
        "what if the #noun# could #verb#",
        "how does the #noun# #verb#"
    ],

    // Conjunctions to link statements
    "conjunction": [
        "and",
        "but",
        "so",
        "because",
        "or",
        "yet",
        "for",
        "however",
        "therefore",
        "also"

    ],

    // STATIC WORD LISTS
    "noun": [
        "dog", "car", "tree", "house", "computer", "city", "ocean", "book", "phone", "idea", "cat", "bicycle", "river", "mountain", "garden", "friend", "story", "game", "song", "movie", "artist", "dream", "journey", "light", "shadow", "voice", "world", "future"
    ],
    "verb": [
        "run", "jump", "swim", "drive", "read", "write", "think", "talk", "listen", "play", "create", "explore", "discover", "imagine", "build", "design", "travel", "learn", "teach", "share", "change", "grow", "move", "see", "feel", "believe", "understand", "help", "work", "live"
    ],
    "adjective": [
        "big", "small", "fast", "slow", "hot", "cold", "new", "old", "good", "bad", "bright", "dark", "happy", "sad", "loud", "quiet", "strong", "weak", "easy", "hard", "simple", "complex", "fancy", "plain", "rich", "poor", "young", "ancient", "fresh", "stale", "brave", "calm", "eager", "fierce", "gentle", "kind", "lazy", "proud", "silly", "wise"
    ],
    "adverb": [
        "quickly", "silently", "happily", "sadly", "angrily", "calmly", "eagerly", "patiently", "foolishly", "wisely", "bravely", "boldly", "brightly", "cheerfully", "deeply", "eagerly", "faithfully", "gently", "honestly", "intensely", "kindly", "loudly", "merrily", "nervously", "openly", "politely", "quickly", "rarely", "softly", "truly", "warmly"
    ],
    // STATIC MORPHEME LISTS FOR NEOLOGISM
    "prefix": ["un", "re", "pre", "mis", "non", "anti", "de", "dis", "in", "inter", "sub", "post"],
    "suffix": ["ing", "ness", "able", "tion", "ize", "ology", "ism", "ment", "er", "ist", "ful", "less"],
    "nounifyingSuffix": ["ness", "ment", "ism", "ist", "ology", "dom", "ship", "hood", "ity", "er"],
    "verbifyingSuffix": ["ize", "ify", "ate"],
    "adjectivizingSuffix": ["able", "ish", "ous", "ful", "less", "y", "ic", "al", "esque", "oid", "like"],
    "antonymPair": [
        "truth-lie", "good-bad", "hot-cold", "fast-slow", "new-old", "light-dark", "happy-sad", "big-small", "strong-weak", "easy-hard", "rich-poor", "young-old", "bright-dull", "brave-cowardly", "calm-agitated", "fierce-tame", "gentle-rough", "kind-cruel", "lazy-industrious", "proud-humble", "silly-serious", "wise-foolish"
    ],

    // DYNAMIC NEOLOGISM GENERATOR
    "neologism": [
        // Compounding (combining two root words)
        "#noun##noun#",
        "#adjective##noun#",
        "#noun#-#verb#",

        //Affixation (adding prefixes/suffixes to a root)
        "#prefix##noun#",
        "#prefix##verb#",
        "#verb##suffix#",
        "#adjective##suffix#",
        "#prefix##adjective#",

        //Antonymic Oppositions
        "#antonymPair#"
    ]
};