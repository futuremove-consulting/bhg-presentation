'use client';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-xl font-serif text-white tracking-tight">FutureMove</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <span className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full">Executive Intelligence Brief</span>
            <span className="text-orange-500 font-medium">BHG Group</span>
          </div>
        </div>
      </div>
    </header>
  );
}