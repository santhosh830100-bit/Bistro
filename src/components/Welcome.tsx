import { motion } from "motion/react";
import { ArrowRight, UtensilsCrossed } from "lucide-react";

export function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Background with Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFtdXiF2q3v5Hp-q6X-avcTKaDsq5KMI6K88N8tttyni4tAIvt1gMB638l5RW3spc6PffzYRQS5Cg5WTEaoud4P69BHoDb282AvNpwYcIXX2mPYQi_q1e4N9r_dzGitQC6iXqKF0fIBWj6X0PDf3U-H2fcnUc-V6xxfhC0SV8dldb0uVNw7bCSFEG3_Yw9IT4fgGZ881DcYUQfg9f9fEf3zqhDMjds0ewQblStiAhbpm3anx0rgXzKNk_tm9jWke122Esx334kSLg" 
          alt="Atmosphere" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-container/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-container/10 blur-[150px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-12 px-6 w-full max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 rounded-full glass-panel flex items-center justify-center mb-8 active-glow">
            <UtensilsCrossed className="w-16 h-16 text-primary-container" />
          </div>
          <h1 className="text-5xl font-black italic text-primary-container tracking-widest glow-text mb-4">
            BISTRO
          </h1>
          <div className="h-px w-16 bg-outline-variant mb-4" />
          <p className="text-on-surface-variant italic font-medium tracking-wide">
            Culinary Immersion
          </p>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onStart}
          className="w-full bg-primary-container text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold active-glow hover:brightness-110 active:scale-95 transition-all"
        >
          <span>Enter Kitchen</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </main>
  );
}
