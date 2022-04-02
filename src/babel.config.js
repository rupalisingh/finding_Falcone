module.exports = (api) => {
    const presets = ["@babel/preset-react","@babel/preset-env",];
    const plugins = [
        "@babel/plugin-transform-modules-commonjs",
        "inline-react-svg",
        "@babel/plugin-syntax-jsx",
    ]; 
  
    api.cache(false); 
   
    return {
        presets,
        plugins
    };
};