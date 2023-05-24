//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.currentRoster = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.currentRoster));
  }

  add(name, grade) {
    this.currentRoster[grade] = this.currentRoster[grade] ?? [];

    for (let currentGrade in this.currentRoster) {
      let index = this.currentRoster[currentGrade].indexOf(name);
      if (index !== -1) {
        this.currentRoster[currentGrade].splice(index, 1);
      }
    }

    this.currentRoster[grade].push(name);
    this.currentRoster[grade].sort();
  }

  grade(selectedGrade) {
    if (this.currentRoster[selectedGrade] === undefined) return [];

    return [...this.currentRoster[selectedGrade]];
  }
}
