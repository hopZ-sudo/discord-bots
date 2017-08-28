class Help {
    constructor() {
        this.commands = ["help"];
        this.commandList = {
            '!card': 'Search for an English Magic card by (partial) name, supports full Scryfall syntax, *Example: !card iona*',
            '!price': 'Show the price in USD, EUR and TIX for a card, *Example: !price iona*',
            '!legal': 'Show the format legality for a card, *Example: !legal iona*',
            '!ruling': 'Show the Gatherer rulings for a card, *Example: !ruling iona*',
            '!ipg': 'Show an entry from the Infraction Procedure Guide, *Example: !ipg 4.2, !ipg grv philosophy*',
            '!mtr': 'Show an entry from Magic: The Gathering Tournament Rules, *Example: !mtr 2, !mtr 4.2*',
            '!cr': 'Show an entry from the Comprehensive Rulebook, *Example: !cr 100.6b*',
            '!define': 'Show a definition from the Comprehensive Rulebook, *Example: !define phasing*',
            '!hangman': 'Start a game of hangman, where you have to guess the card namen with reaction letters, can be played at easy, medium or hard, *Example: !hangman easy*',
            '!standard': 'Lists the currently standard legal sets and when they will rotate, *Example: !standard*'
        };
    }

    getCommands() {
        return this.commands;
    }

    handleMessage(command, parameter, msg) {
        const commands = Object.keys(this.commandList).map(cmd => `  :small_blue_diamond: **${cmd}**: ${this.commandList[cmd]}`);
        const response = [
            '**Available commands:**',
            commands.join('\n'),
            '\nThis bot is provided free of charge and can be added to your channel, too!',
            ':link: https://bots.discord.pw/bots/240537940378386442',
            ':link: https://github.com/bra1n/judgebot'
        ].join('\n');
        return msg.author.send(response);
    }
}
module.exports = Help;
