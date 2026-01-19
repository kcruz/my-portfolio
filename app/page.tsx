import { Github, Mail, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 font-sans">
      {/* Header / Intro */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800">
          I'm Karl Michael Dela Cruz
        </h1>
        <p className="mt-4 text-zinc-600 leading-relaxed">
          Designer focused on building open-source tools and clean web experiences. 
          Currently exploring the intersection of AI and minimalist design.
        </p>
        
        <div className="flex gap-4 mt-6">
          <a href="#" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-black transition">
            <Github size={18} /> GitHub
          </a>
          <a href="#" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-black transition">
            <Mail size={18} /> Contact
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid gap-8">
          <ProjectRow 
            title="Project Alpha" 
            desc="An open-source task manager built with React." 
            link="#" 
          />
          <ProjectRow 
            title="Portfolio Template" 
            desc="The very site you are looking at right now." 
            link="#" 
          />
        </div>
      </section>
    </div>
  );
}

// A simple sub-component for project rows
function ProjectRow({ title, desc, link }: { title: string, desc: string, link: string }) {
  return (
    <a href={link} className="group flex justify-between items-start border-b border-zinc-100 pb-4 hover:border-zinc-300 transition-colors">
      <div>
        <h3 className="font-medium text-zinc-900">{title}</h3>
        <p className="text-sm text-zinc-500">{desc}</p>
      </div>
      <ExternalLink size={16} className="text-zinc-400 group-hover:text-black transition" />
    </a>
  );
}