const TeamMember = ({ name, role, icon, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-primary-600 font-medium mb-3">{role}</p>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'UX/UI 디자인팀',
      role: '사용자 경험 전문가',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      description:
        '직관적이고 접근성 높은 사용자 인터페이스 디자인을 통해 최상의 사용자 경험을 제공합니다.',
    },
    {
      name: '프론트엔드팀',
      role: '개발 전문가',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      description:
        '최신 웹 기술과 모범 사례를 활용하여 빠르고 안정적인 프론트엔드 애플리케이션을 구축합니다.',
    },
    {
      name: '품질 관리팀',
      role: '테스트 전문가',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      description:
        '철저한 테스트와 품질 관리를 통해 버그 없는 안정적인 애플리케이션을 보장합니다.',
    },
    {
      name: '성능 최적화팀',
      role: '퍼포먼스 전문가',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      description:
        '최적화된 코드와 효율적인 리소스 관리로 빠른 로딩 속도와 부드러운 사용자 경험을 제공합니다.',
    },
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">팀 소개</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          이 템플릿을 개발하고 유지 관리하는 전문가 팀을 소개합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            icon={member.icon}
            description={member.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;