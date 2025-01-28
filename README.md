Transitive dependency-like example our project needed parcel and parcel has its own dependencies i.e when the project is dependent on some dependencies and that dependencies also has its own dependencies then its known as transitive dependencies

1. ESBuild
Why it's fast: Written in Go and optimized for speed.
Performance: Typically 10-100x faster than traditional bundlers like Webpack.
Use case: Great for development builds or lightweight projects needing ultra-fast bundling.
Limitations: Limited plugin ecosystem compared to Webpack or Vite.

2. SWC
Why it's fast: Written in Rust with parallel processing.
Performance: Comparable to or faster than ESBuild in some scenarios.
Use case: Replacing Babel in toolchains or working in large TypeScript/JavaScript projects.
Limitations: Plugin system and ecosystem are still growing.     

3. Parcel
Why it's fast: Zero-config, uses workers for parallel processing, and caches aggressively.
Performance: Faster than Webpack for most projects, though not as fast as ESBuild or SWC.
Use case: Great for beginners or projects where zero configuration is desired. HMR-Hot Module Replacement  and it uses
File Watching Algorithm written in C++ ,Caching for faster builds ,Image optimization ,minification , bundling ,compressing,Consistant Hashing ,Code splitting and Differential Bundling(supports applcation for older browsers versions),TreeShaking algorithm(remove unused code)
Limitations: Less control and flexibility compared to Webpack or Vite.  

4. Vite
Why it's fast: Uses ESBuild for development and Rollup for production builds.
Performance: Near-instant startup and HMR for development.
Use case: Modern web apps, especially with frameworks like React, Vue, or Svelte.
Limitations: Slightly slower production builds compared to ESBuild or SWC.

5. Rollup
Why it's fast: Tree-shaking and optimized builds.
Performance: Focuses on efficient, small production bundles.
Use case: Libraries and packages where output size matters.
Limitations: Slower than ESBuild or SWC in development.

Comparison-

Bundler	 Development Speed	Production Speed	Use Case
ESBuild	 🚀🚀🚀	             🚀🚀	          Lightning-fast, simple builds
SWC	     🚀🚀🚀	            🚀🚀🚀	         Large projects with TypeScript
Vite	 🚀🚀🚀	           🚀🚀	              Framework-based apps (React, Vue, etc.)
Parcel	 🚀🚀              🚀🚀	              Zero-config setups
Rollup	 🚀	               🚀🚀🚀	          Libraries needing optimal tree-shaking
