const { src, dest, series, parallel, watch } = require( 'gulp' );
const sourcemaps                             = require( 'gulp-sourcemaps' );

const del   = require( 'del' );
const babel = require( 'gulp-babel' );
const sass  = require( 'gulp-sass' );

const origin      = 'src';
const destination = 'dist';

sass.compiler = require( 'node-sass' );

async function clean() {
	await del( destination );
}

function copy( cb ) {
	src( `${ origin }/featherlight*` )
		.pipe( dest( `${ destination }` ) );

	cb();
};

function html( cb ) {
	src( [
		`${ origin }/**/*.html`,
		`${ origin }/**/*.txt`
	] )
		.pipe( dest( destination ) );
	cb();
}

function css( cb ) {
	src( `${ origin }/style.scss` )
		.pipe( sass( {
			outputStyle: 'expanded'
		} ) )
		.pipe( dest( `${ destination }` ) );
	cb();
}

function js( cb ) {
	src( `${ origin }/index.js` )
		.pipe( sourcemaps.init() )
		.pipe( babel( {
			presets: ['@babel/env']
		} ) )
		.pipe( sourcemaps.write( '.' ) )
		.pipe( dest( `${ destination }` ) );
	cb();
}

function watcher( cb ) {

	watch(`${ origin }/**/*.js`, js);
	watch(`${ origin }/**/*.scss`, css);

	//watch( `${ origin }/**/*.scss` ).on( 'change', css );
	//watch( `${ origin }/**/*.js` ).on( 'change', js );

	cb();
}

function server( cb ) {
	browserSync.init( {
		notidy: false,
		open: false,
		server: {
			baseDir: destination
		}
	} );
	cb();
}

exports.default = series( clean, parallel( css, js ), copy, watcher );
