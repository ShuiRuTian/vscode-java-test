// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

export abstract class JavaLanguageServerCommands {
    static EXECUTE_WORKSPACE_COMMAND: string = 'java.execute.workspaceCommand';
    static RESOLVE_STACKTRACE_LOCATION: string = 'java.project.resolveStackTraceLocation';
}

export abstract class JavaTestRunnerDelegateCommands {
    static GET_TEST_SOURCE_PATH: string = 'vscode.java.test.get.testpath';
    static RESOLVE_JUNIT_ARGUMENT: string = 'vscode.java.test.junit.argument';
    static GENERATE_TESTS: string = 'vscode.java.test.generateTests';
    static FIND_JAVA_PROJECTS: string = 'vscode.java.test.findJavaProjects';
    static FIND_TEST_PACKAGES_AND_TYPES: string = 'vscode.java.test.findTestPackagesAndTypes';
    static FIND_DIRECT_CHILDREN_FOR_CLASS: string = 'vscode.java.test.findDirectTestChildrenForClass';
    static FIND_TEST_TYPES_AND_METHODS: string = 'vscode.java.test.findTestTypesAndMethods';
    static RESOLVE_PATH: string = 'vscode.java.test.resolvePath';
    static NAVIGATE_TO_TEST_OR_TARGET: string = 'vscode.java.test.navigateToTestOrTarget';
}

export abstract class JavaTestRunnerCommands {
    static RUN_TEST_FROM_EDITOR: string = 'java.test.editor.run';
    static DEBUG_TEST_FROM_EDITOR: string = 'java.test.editor.debug';
    static RUN_TEST_FROM_JAVA_PROJECT_EXPLORER: string = 'java.test.runFromJavaProjectExplorer';
    static DEBUG_TEST_FROM_JAVA_PROJECT_EXPLORER: string = 'java.test.debugFromJavaProjectExplorer';
    static RUN_FROM_TEST_EXPLORER: string = 'java.test.explorer.run';
    static DEBUG_FROM_TEST_EXPLORER: string = 'java.test.explorer.debug';
    static JAVA_TEST_GENERATE_TESTS: string = 'java.test.generateTests';
    static FIND_TEST_LOCATION: string = 'vscode.java.test.findTestLocation';
    static GO_TO_TEST: string = 'java.test.goToTest';
    static GO_TO_TEST_SUBJECT: string = 'java.test.goToTestSubject';
    static ENABLE_TESTS: string = '_java.test.enableTests';
    static JAVA_TEST_OPEN_STACKTRACE: string = '_java.test.openStackTrace';
    static ASK_CLIENT_FOR_CHOICE: string = '_java.test.askClientForChoice';
    static ASK_CLIENT_FOR_INPUT: string = '_java.test.askClientForInput';
    static ADVANCED_ASK_CLIENT_FOR_CHOICE: string = '_java.test.advancedAskClientForChoice';
}

export abstract class VSCodeCommands {
    static RUN_TESTS_IN_CURRENT_FILE: string = 'testing.runCurrentFile';
    static DEBUG_TESTS_IN_CURRENT_FILE: string = 'testing.debugCurrentFile';
    static WORKBENCH_ACTION_QUICK_OPEN: string = 'workbench.action.quickOpen';
}

export abstract class Configurations {
    static LOCAL_HOST: string = '127.0.0.1';
    static DEFAULT_CONFIG_NAME_SETTING_KEY: string = 'java.test.defaultConfig';
    static CONFIG_SETTING_KEY: string = 'java.test.config';
    static BUILTIN_CONFIG_NAME: string = 'default';
    static HINT_FOR_DEFAULT_CONFIG_SETTING_KEY: string = 'java.test.message.hintForSettingDefaultConfig';
}

export abstract class Dialog {
    static NEVER_SHOW: string = 'Never Show again';
    static YES: string = 'Yes';
    static NO: string = 'No';
}

export abstract class ExtensionName {
    static JAVA_DEBUGGER: string = 'vscjava.vscode-java-debug';
    static JAVA_LANGUAGE_SUPPORT: string = 'redhat.java';
}

export abstract class Context {
    static ACTIVATION_CONTEXT_KEY: string = 'java:testRunnerActivated';
}

/**
 * This is the prefix of the invocation test item's id.
 * Invocation test items are created during test run.
 * For example, the invocations from a parameterized test.
 */
export const INVOCATION_PREFIX: string = '[__INVOCATION__]-';
