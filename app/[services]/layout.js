export default function ServiceLayout({ children }) {
  return (
    <div className="service-page-layout">
      {/* 
        This layout wraps all service pages. 
        You can add shared UI elements here, like a specific service header 
        or a persistent "Call Now" floating button if not in the main layout.
        
        For now, it's a pass-through generic layout.
      */}
      {children}
    </div>
  );
}
