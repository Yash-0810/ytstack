# Error Log & Fixes - YTStack Frontend

## 1. Black Page Issue
**Error**: Entire site showed black background  
**Cause**: App.js had `bg-slate-950` (dark theme)  
**Fix**: Changed to `bg-white` to match light theme pages  
**Date**: 2024

## 2. React ReferenceError: CTAArrowPointer is not defined
**Error**: `Uncaught ReferenceError: CTAArrowPointer is not defined` in HomePage.jsx, PricingPage.jsx, ProcessPage.jsx, etc.  
**Cause**: CTAArrowPointer used without import in pages  
**Fix**: Commented out `<CTAArrowPointer />` → `{/* CTAArrowPointer */}` in 5 files, preserved button styling  
**Date**: 2024

## 3. HTML Parse Error during npm run build
**Error**: `Parse Error: <a` from html-minifier-terser  
**Cause**: JSX syntax parsed as HTML in minifier (likely invalid JSX)  
**Fix**: Cleaned CTAArrowPointer.jsx, removed faulty import  
**Date**: 2024

## 4. WebSocket connection failed (ws://localhost:443/ws)
**Error**: Console warnings `WebSocket connection to 'ws://localhost:443/ws' failed`  
**Cause**: VSCode dev server HMR on port 443 (blocked/Occupied)  
**Fix**: Normal/ignore - doesn't affect functionality, hot reload works  
**Date**: 2024

## Future Errors: 
Add new errors here with cause + fix.

**Site Status**: Running at http://localhost:3000 ✅ All tasks complete
