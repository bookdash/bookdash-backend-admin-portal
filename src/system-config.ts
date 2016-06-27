// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
    '@angular2-material': 'vendor/@angular2-material',
    'firebase':'vendor/firebase/firebase.js',
    'angularfire2': 'vendor/angularfire2',
};

/** User packages configuration. */
const packages: any = {
    '@angular2-material/core': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'core.js'
    },
    '@angular2-material/checkbox': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'checkbox.js'
    },
    '@angular2-material/button': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'button.js'
    },
    '@angular2-material/card': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'card.js'
    },
    '@angular2-material/input': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'input.js'
    },
    '@angular2-material/toolbar': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'toolbar.js'
    },
    'angularfire2': {
        defaultExtension: 'js',
        main: 'angularfire2.js'
    }



};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',

    // Thirdparty barrels.
    'rxjs',

    // App specific barrels.
    'app',
    'app/shared',
    /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
