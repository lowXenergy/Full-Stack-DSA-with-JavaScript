const AvatarGroup = () => {
  return (
    <div className="flex items-center">
      
      {/* Glass Container */}
      <div className="flex items-center px-3 py-2 rounded-full 
                      bg-white/20 backdrop-blur-md border border-white/30">
        
        {/* Avatar 1 */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />

        {/* Avatar 2 */}
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-3"
        />

        {/* Avatar 3 */}
        <img
          src="https://randomuser.me/api/portraits/men/76.jpg"
          className="w-10 h-10 rounded-full border-2 border-white object-cover -ml-3"
        />
      </div>

    </div>
  );
};

export default AvatarGroup;