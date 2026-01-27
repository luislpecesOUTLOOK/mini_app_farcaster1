"use client";

/**
 * HomeTab component displays the main landing content for the mini app.
 * 
 * This is the default tab that users see when they first open the mini app.
 * It provides a simple welcome message and placeholder content that can be
 * customized for specific use cases.
 * 
 * @example
 * ```tsx
 * <HomeTab />
 * ```
 */
export function HomeTab() {
return (
  <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] px-6 space-y-6">
    {/* Imagen navecita centrada */}
    <div className="flex-shrink-0">
      <img 
        src="/galactica.png"  // Cambia por tu imagen
        alt="Navecita Galactica 🛸"
        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-2xl shadow-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 hover:shadow-galactica"
      />
    </div>
    
    {/* Texto */}
    <div className="text-center w-full max-w-md mx-auto">
      <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        ¡Las navecitas de GALACTICA!
      </p>
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">
        Powered by <span className="font-bold text-purple-500 hover:text-purple-400 transition-colors">Lacajaambar 🪐</span>
      </p>
    </div>
  </div>
);

} 