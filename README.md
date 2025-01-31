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



Component Composition - When one or more components are together render inside another component then it is known as component composition

Props- Just like normal argurment in the function.
example: <RestaurantCard resName='props' cuisines='another props'>
where resName and cuisines are props so pass it like a normal js arguments in the components.and also pass props in the component and use it props.resName and props.cuisines and also destructuring them like const {resName,cuisines}=props these 3 methods we can use these props .

key in map - Not using keys (not acceptable) <<<< index as a key <<<< unique id(best practice) in general way


export/import  is of two types: 1. Default Exports/import Example: const App=()=>{}; export default App; in this we can import : import App from App;
                                2. Name Export/import  Example: export const App=()=>{}; in this we can import like this: import {App} from "./file";
Another thing is module cannnot have multiple default exports

# React Hooks -(Normal utility JS functions)
-useState() - It is a state variable because it maintain the state of the components
  Normal Js variable - list listofRestaurants    ,Local State Variable-const [listofRestaurants]=useState();
  Whenever state variable is updating/changing react rerenders the components
-useEffect()



react.development.js and react.production.js-


Feature	                      react.development.js 🛠️	                                    react.production.js 🚀

1.Purpose	            Used for development with extra debugging tools.	       Optimized for production to improve performance.
2.File Size	              Larger (includes warnings, extra checks).	                    Smaller (minified, optimized).
3.Performance	           Slower (extra validations, helpful errors).	                  Faster (removes dev-only checks).
4.Error Messages	         Detailed warnings, prop-type checks, etc.	               Removes most runtime warnings to save space.
5.Console Logs	             Shows useful debugging logs in the console.	                No logs (errors are minimized).
6.Usage	                   Use in development mode for better debugging.	           Use in production mode for better performance.

# Two Types of Routing in Web Applications- 1> Client Side Routing 
#                                           2> Server Side Routing