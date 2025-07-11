export default function WordDisplay({ text }) {
  const handleCopy = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      className="text-6xl font-bold text-center" 
      onCopy={handleCopy} // user cannot copy the text
      style={{ userSelect: 'none' }}
    >{text}
    </div>
  )
}
