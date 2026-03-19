 export default function PropSection () {
    return (
 <div className="flex  flex-col md:flex-col gap-2">
  <h2 className="text-lg font-semibold">Props</h2>
  <div className="border border-white/10 rounded-lg overflow-hidden">
    
    {/* Header */}
    <div className="grid grid-cols-4 px-4 py-2 bg-white/5 text-xs text-gray-400 uppercase tracking-wider">
      <span>Prop</span>
      <span>Type</span>
      <span>Required</span>
      <span>Description</span>
    </div>

    {/* Rows */}
    {[
      { prop: "steps", type: "array", required: "yes", desc: "Array of tour steps" },
      { prop: "onFinish", type: "function", required: "yes", desc: "Called when tour ends" },
      { prop: "spotlightStyle", type: "object", required: "no", desc: "Override spotlight styles" },
      { prop: "popoverStyle", type: "object", required: "no", desc: "Override popover styles" },
    ].map((row) => (
      <div key={row.prop} className="grid grid-cols-4 px-4 py-3 border-t border-white/5 text-sm hover:bg-white/5">
        <span className="font-mono text-purple-400">{row.prop}</span>
        <span className="text-gray-400">{row.type}</span>
        <span className="text-gray-400">{row.required}</span>
        <span className="text-gray-300">{row.desc}</span>
      </div>
    ))}

  </div>
</div>
    )
 }
 
