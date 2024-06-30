
function createUserProfiles(originalNames, formattedStrings) {
  const profiles = [];

  for (let i = 0; i < originalNames.length; i++) {
    profiles.push({
      originalName: originalNames[i],
      modifiedName: formattedStrings[i],
      id: i + 1,
    });
  }

  return profiles;
}

export default createUserProfiles
