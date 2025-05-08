import process from 'node:process';

export default function isUnicodeSupported() {
    const { env } = process;
    const { TERM, TERM_PROGRAM, WT_SESSION, TERMINUS_SUBLIME, ConEmuTask, TERMINAL_EMULATOR } = env;
    if (process.platform !== 'win32') {
        return TERM !== 'linux';
    }
    const isWindowsTerminal = Boolean(WT_SESSION);
    const isTerminusSublime = TERM_PROGRAM === 'Terminus-Sublime';
    const isVscode = TERM_PROGRAM === 'vscode';
    const isConEmu = ConEmuTask === '{cmd::Cmder}';
    const isOtherKnownTerminals = [
        'xterm-256color',
        'alacritty',
        'rxvt-unicode',
        'rxvt-unicode-256color'
    ].includes(TERM);
    return (
        isWindowsTerminal || 
        Boolean(TERMINUS_SUBLIME) || 
        isConEmu || 
        isTerminusSublime || 
        isVscode || 
        isOtherKnownTerminals || 
        TERMINAL_EMULATOR === 'JetBrains-JediTerm'
    );
}
