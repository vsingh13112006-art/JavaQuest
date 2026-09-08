import { buildTopicModule } from "../shared/topic-module-builder.mjs";

const points = [
  { slug: "custom-exceptions-validation-why-custom-exceptions", title: "Why Custom Exceptions", code: false },
  { slug: "custom-exceptions-validation-create-exception-class", title: "Create Exception Class", code: true },
  { slug: "custom-exceptions-validation-throw-keyword", title: "`throw` Keyword", code: false },
  { slug: "custom-exceptions-validation-validation-method", title: "Validation Method", code: true },
  { slug: "custom-exceptions-validation-checked-vs-runtime-intro", title: "Checked vs Runtime Intro", code: false },
  { slug: "custom-exceptions-validation-meaningful-messages", title: "Meaningful Messages", code: true },
  { slug: "custom-exceptions-validation-validation-boundaries", title: "Validation Boundaries", code: false },
  { slug: "custom-exceptions-validation-custom-exception-recap", title: "Custom Exception Recap", code: true }
];

export const customExceptionsValidationModule = buildTopicModule({
  slug: "custom-exceptions-validation",
  title: "Module 42 — Custom Exceptions & Validation",
  description: "Domain rules ko custom exceptions aur validation boundaries se express karo.",
  position: 42,
  difficulty: "INTERMEDIATE",
  capstone: false,
  coreIdea: "Custom exception failure ko domain-specific naam deti hai, jisse caller ko clear signal milta hai ki kya rule break hua.",
  model: "input -> validate -> valid path OR custom exception",
  syntax: "class InvalidAgeException extends Exception { ... }",
  example: "if(age<18) throw new InvalidAgeException(\"Too young\");",
  trace: "invalid input -> throw -> caller catches meaningful type",
  mistake: "Invalid input ko silently correct kar dena jab requirement reject karna ho.",
  fix: "Validation rule aur failure message explicit rakho.",
  remember: "Custom exception domain language ko error handling me laati hai.",
  check: "Custom checked exception often kis class ko extend karti hai?",
  answer: "Exception",
  labs: [{
    starterCode: "class InvalidScoreException extends Exception{InvalidScoreException(String m){super(m);}}\npublic class Main{static void validate(int s)throws InvalidScoreException{if(s<0||s>100)throw new InvalidScoreException(\"Invalid score\");}public static void main(String[] args){try{validate(120);}catch(InvalidScoreException e){System.out.println(e.getMessage());}}}",
    solution: "class InvalidScoreException extends Exception{InvalidScoreException(String m){super(m);}}\npublic class Main{static void validate(int s)throws InvalidScoreException{if(s<0||s>100)throw new InvalidScoreException(\"Invalid score\");}public static void main(String[] args){try{validate(120);}catch(InvalidScoreException e){System.out.println(e.getMessage());}}}",
    expectedOutput: "Invalid score",
  }],
}, points);
