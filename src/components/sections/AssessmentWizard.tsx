import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, RotateCcwIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { assessmentAreas, assessmentQuestions } from '../../data/assessment';
import type { AssessmentAreaId } from '../../types';

export function AssessmentWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const prefersReduced = useReducedMotion();

  const complete = step >= assessmentQuestions.length;
  const question = assessmentQuestions[Math.min(step, assessmentQuestions.length - 1)];

  const results = useMemo(() => {
    const scores = new Map<AssessmentAreaId, number>();
    assessmentQuestions.forEach((item) => {
      const choice = answers[item.id];
      if (choice === undefined) return;
      item.options[choice]?.areas.forEach((area) => {
        scores.set(area, (scores.get(area) ?? 0) + 1);
      });
    });
    return assessmentAreas.
    map((area) => ({ area, score: scores.get(area.id) ?? 0 })).
    filter((entry) => entry.score > 0).
    sort((a, b) => b.score - a.score);
  }, [answers]);

  const select = (index: number) => {
    setAnswers((current) => ({ ...current, [question.id]: index }));
    setStep((current) => current + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  const progress = complete ? 100 : step / assessmentQuestions.length * 100;

  return (
    <section
      id="assessment"
      aria-labelledby="assessment-heading"
      className="relative border-y border-line bg-ink-950/60">
      <div className="shell py-20 md:py-28">
        <SectionHeading
          eyebrow="Free 1-minute quiz"
          title={<span id="assessment-heading">Not sure where to start? Take the quiz</span>}
          subtitle="Six easy questions about your business. We’ll show you what we would do first for a business like yours — free, with no obligation." />
        

        <div className="mt-12 overflow-hidden rounded-xl border border-line bg-ink-800/50">
          <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
            <p className="font-mono text-[12px] text-mist-faint">
              {complete ?
              'Assessment complete' :
              `Question ${step + 1} of ${assessmentQuestions.length}`}
            </p>
            <div className="flex items-center gap-3">
              {step > 0 && !complete &&
              <button
                type="button"
                onClick={() => setStep((current) => Math.max(0, current - 1))}
                className="inline-flex items-center gap-1.5 text-[12.5px] text-mist-dim transition-colors duration-200 ease-premium hover:text-white">
                
                  <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  Back
                </button>
              }
              {complete &&
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 text-[12.5px] text-mist-dim transition-colors duration-200 ease-premium hover:text-white">
                
                  <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  Start again
                </button>
              }
            </div>
          </div>

          <div
            className="h-0.5 w-full bg-white/[0.06]"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            aria-label="Assessment progress">
            
            <motion.div
              className="h-full bg-accent"
              animate={{ width: `${progress}%` }}
              transition={{ duration: prefersReduced ? 0 : 0.3, ease: [0.23, 1, 0.32, 1] }} />
            
          </div>

          <div className="p-6 md:p-9">
            <AnimatePresence mode="wait">
              {!complete ?
              <motion.div
                key={question.id}
                initial={prefersReduced ? undefined : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, x: -16 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col gap-6">
                
                  <div className="flex flex-col gap-2">
                    <h3 className="text-balance text-[22px] font-medium tracking-tight text-white md:text-[27px]">
                      {question.question}
                    </h3>
                    <p className="text-[13.5px] text-mist-faint">{question.helper}</p>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {question.options.map((option, index) =>
                  <li key={option.label}>
                        <button
                      type="button"
                      onClick={() => select(index)}
                      className="group flex w-full items-center gap-3 rounded-lg border border-line bg-white/[0.02] px-4 py-4 text-left text-[14.5px] text-mist-dim transition-[background-color,border-color,color,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/[0.07] hover:text-white">
                      
                          <span
                        aria-hidden="true"
                        className="h-2 w-2 shrink-0 rounded-full border border-line-strong transition-colors duration-200 ease-premium group-hover:border-accent group-hover:bg-accent" />
                      
                          {option.label}
                        </button>
                      </li>
                  )}
                  </ul>
                </motion.div> :

              <motion.div
                key="results"
                initial={prefersReduced ? undefined : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col gap-7">
                
                  <div className="flex flex-col gap-2">
                    <p className="text-[12px] uppercase tracking-[0.16em] text-accent-soft">
                      Your digital growth areas
                    </p>
                    <h3 className="text-[24px] font-medium tracking-tight text-white md:text-[30px]">
                      Where we would start, based on your answers
                    </h3>
                  </div>

                  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {results.map((entry, index) =>
                  <motion.li
                    key={entry.area.id}
                    initial={prefersReduced ? undefined : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: Math.min(index * 0.05, 0.25),
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="flex flex-col gap-3 rounded-lg border border-line bg-white/[0.02] p-5">
                    
                        <div className="flex items-center justify-between">
                          <entry.area.icon className="h-4 w-4 text-accent-soft" aria-hidden="true" />
                          {index === 0 &&
                      <span className="rounded-full border border-accent/50 bg-accent/15 px-2 py-0.5 text-[11.5px] uppercase tracking-[0.1em] text-accent-soft">
                              Priority
                            </span>
                      }
                        </div>
                        <h4 className="text-[16px] font-medium text-white">{entry.area.label}</h4>
                        <p className="text-[13px] leading-relaxed text-mist-faint">
                          {entry.area.description}
                        </p>
                      </motion.li>
                  )}
                  </ul>

                  <div className="flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center">
                    <Button
                    to={`/contact?areas=${results.map((entry) => entry.area.id).join(',')}#form`}
                    withArrow>

                      Send These Results to Our Team
                    </Button>
                    <p className="text-[13px] text-mist-faint">
                      Your priorities are attached to the enquiry form, so you will not need to repeat them.
                    </p>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}